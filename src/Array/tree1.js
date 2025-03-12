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
]

/**
 * 构建树形结构并合并字段数据
 * @param {Array} groupData - 分组数据
 * @param {Array} fieldData - 字段数据
 * @returns {Array} - 包含树形结构和未分组字段的数组
 */
function buildTreeWithFields(groupData, fieldData) {
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

  // 初始化树结构
  const tree = [];

  // 第一步：构建基本树形结构
  // 遍历每个节点，构建父子关系
  clonedGroupData.forEach(node => {
    if (node.parent && nodeDict[node.parent]) {
      // 如果有parent且parent存在，将节点添加到其父节点的children数组中
      nodeDict[node.parent].children.push(node);
    } else {
      // 如果没有parent或parent不存在，说明是根节点
      tree.push(node);
    }
  });

  // 第二步：将字段数据合并到树中
  // 将fields中的项按groupId分组
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

  // 将分组后的fields添加到对应的树节点中
  Object.keys(fieldsByGroup).forEach(groupId => {
    const node = nodeDict[groupId];

    // 按照原始顺序排序分组内的字段
    const originalFieldsMap = new Map();
    fieldData.forEach((field, index) => {
      originalFieldsMap.set(field.code, index);
    });

    fieldsByGroup[groupId].sort((a, b) => {
      return originalFieldsMap.get(a.code) - originalFieldsMap.get(b.code);
    });

    // 将字段作为子节点添加
    fieldsByGroup[groupId].forEach(field => {
      node.children.push(field);
    });
  });

  // 清理空的children数组
  const cleanEmptyChildren = (nodes) => {
    nodes?.forEach(node => {
      if (node.children?.length === 0) {
        delete node.children;
      } else {
        cleanEmptyChildren(node.children);
      }
    });
  };

  cleanEmptyChildren(tree);

  // 第三步：按照原始顺序排列未分组字段
  // 创建一个映射，用于快速查找字段在原始数组中的位置
  const originalFieldsMap = new Map();
  fieldData.forEach((field, index) => {
    originalFieldsMap.set(field.code, index);
  });

  // 对未分组字段按原始顺序排序
  fieldsWithoutGroup.sort((a, b) => {
    return originalFieldsMap.get(a.code) - originalFieldsMap.get(b.code);
  });

  // 返回合并后的树和按顺序排列的未分组字段
  return {
    tree: tree,
    ungroupedFields: fieldsWithoutGroup,
    combined: [...tree, ...fieldsWithoutGroup]
  };
}

// 测试函数
const result = buildTreeWithFields(theadGroups, fields);
console.log("树形结构:");
console.log(JSON.stringify(result.tree, null, 2));
console.log("未分组的字段:");
console.log(JSON.stringify(result.ungroupedFields, null, 2));
console.log("合并结果:");
console.log(JSON.stringify(result.combined, null, 2));
