const theadGroups= [

  {
    id: 'a',
    title: '分组1',
    parent: 'c',
  },
  {
    id: 'b',
    title: '分组2',
    parent: 'c',
  },
  {
    id: 'c',
    title: '分组3',
  },
  {
    id: 'd',
    title: '分组4',
  },
]

const fields = [
  {
    code: 'dt',
  },
  {
    code: 'm00',
  },
  {
    code: 'm0',
  },
  {
    code: 'm1',
  },
  {
    code: 'm2',
    groupId: 'a',
    bar: true,
  },
  {
    code: 'm3',
    groupId: 'a',
  },
  {
    code: 'm4',
    groupId: 'b',
  },
  {
    code: 'm41'
  },
  {
    code: 'm5',
    groupId: 'b',
  },
  {
    code: 'm42'
  },
  {
    code: 'm6',
    groupId: 'd',
  },
  {
    code: 'm7',
    groupId: 'd',
  },
  {
    code: 'm8',
  },
  {
    code: 'm9',
  },
  {
    code: 'm91',
  },
]

/**
 * 将分组数据和字段数据转换为特定格式的结果
 * @param {Array} groupData - 分组数据
 * @param {Array} fieldData - 字段数据
 * @returns {Array} - 按特定格式组织的结果数组
 */
function transformData(groupData, fieldData) {
  // 创建一个节点字典，使用id作为键，节点本身作为值
  const nodeDict = {};

  // 克隆原始数据，避免修改原始数据
  const clonedGroupData = groupData.map(item => ({...item}));
  const clonedFieldData = fieldData.map(item => ({...item}));

  // 初始化字典和为每个节点添加children数组
  clonedGroupData.forEach(node => {
    nodeDict[node.id] = node;
    node.children = [];
  });

  // 构建树形结构
  const treeNodes = [];
  clonedGroupData.forEach(node => {
    if (node.parent && nodeDict[node.parent]) {
      // 如果有parent且parent存在，将节点添加到其父节点的children数组中
      nodeDict[node.parent].children.push(node);
    } else {
      // 如果没有parent或parent不存在，说明是根节点
      treeNodes.push(node);
    }
  });

  // 按groupId分组字段
  const fieldsByGroup = {};
  const fieldsWithoutGroup = [];

  clonedFieldData.forEach(field => {
    if (field.groupId && nodeDict[field.groupId]) {
      if (!fieldsByGroup[field.groupId]) {
        fieldsByGroup[field.groupId] = [];
      }
      fieldsByGroup[field.groupId].push(field);
    } else {
      fieldsWithoutGroup.push(field);
    }
  });

  // 将字段添加到对应的分组节点中
  Object.keys(fieldsByGroup).forEach(groupId => {
    const node = nodeDict[groupId];
    // 将字段作为子节点添加
    fieldsByGroup[groupId].forEach(field => {
      node.children.push(field);
    });
  });

  // 创建一个映射，记录每个字段在原始数组中的位置
  const fieldPositionMap = new Map();
  clonedFieldData.forEach((field, index) => {
    fieldPositionMap.set(field.code, index);
  });

  // 创建一个映射，记录每个分组节点包含的最后一个字段的位置
  const groupLastFieldPositionMap = new Map();

  // 递归查找节点中最后一个字段的位置
  function findLastFieldPosition(node) {
    if (!node.children || node.children.length === 0) {
      return -1;
    }

    let lastPosition = -1;

    for (const child of node.children) {
      if (child.code) {
        // 如果子节点是字段
        const position = fieldPositionMap.get(child.code);
        if (position > lastPosition) {
          lastPosition = position;
        }
      } else {
        // 如果子节点是分组
        const childLastPosition = findLastFieldPosition(child);
        if (childLastPosition > lastPosition) {
          lastPosition = childLastPosition;
        }
      }
    }

    return lastPosition;
  }

  // 计算每个根节点中最后一个字段的位置
  treeNodes.forEach(node => {
    const lastPosition = findLastFieldPosition(node);
    if (lastPosition !== -1) {
      groupLastFieldPositionMap.set(node.id, lastPosition);
    }
  });

  // 构建最终结果数组
  const result = [];

  // 遍历原始字段数组的位置
  for (let i = 0; i < clonedFieldData.length; i++) {
    const field = clonedFieldData[i];

    // 如果字段没有分组，直接添加到结果中
    if (!field.groupId || !nodeDict[field.groupId]) {
      result.push(field);
      continue;
    }

    // 如果字段有分组，检查是否需要在这个位置插入分组树
    const groupId = field.groupId;
    const rootGroupId = findRootGroup(nodeDict, groupId);

    // 如果这是分组中的第一个字段，插入整个分组树
    if (!result.some(item => item.id === rootGroupId)) {
      // 找到根节点
      const rootNode = treeNodes.find(node => node.id === rootGroupId);
      if (rootNode) {
        result.push(rootNode);
      }
    }
  }

  // 查找节点的根分组ID
  function findRootGroup(dict, nodeId) {
    const node = dict[nodeId];
    if (!node) return null;
    if (!node.parent || !dict[node.parent]) return node.id;
    return findRootGroup(dict, node.parent);
  }

  // 过滤结果，移除已经包含在树中的字段
  return result.filter((item, index) => {
    // 如果是分组节点，保留
    if (item.id) return true;

    // 如果是字段，检查它是否已经包含在之前的分组树中
    const code = item.code;
    const groupId = item.groupId;

    // 如果字段没有分组，保留
    if (!groupId || !nodeDict[groupId]) return true;

    // 如果字段有分组，检查它的分组是否已经在结果中
    const rootGroupId = findRootGroup(nodeDict, groupId);
    const rootGroupIndex = result.findIndex(r => r.id === rootGroupId);

    // 如果分组在当前字段之前出现，说明字段已经包含在分组树中，不需要再单独添加
    return rootGroupIndex > index || rootGroupIndex === -1;
  });
}

// 测试函数
const result = transformData(theadGroups, fields);
console.log(JSON.stringify(result, null, 2));
