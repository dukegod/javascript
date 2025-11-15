const flowChartData =  [
    {
        "node_id": "95BdVFvowzzT97Kd",
        "node_type": "agent",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "user",
        "callee": "master_agent",
        "parallel_id": "",
        "father_node_id": "",
        "call_stack": [
            "user",
            "master_agent"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:00.151161000",
        "input": "{\"class_attr\": {\"class_name\": \"ReActAgent\", \"is_master\": true, \"llm_model\": \"qwen32b\", \"prompt\": \"\\n你是一个乐于助人的助手，可以使用这些工具：\\n${tools_description}\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\\n\", \"sub_agents\": [\"time_agent\", \"math_agent\"], \"tools\": [], \"except_tools\": [], \"is_sourcing_tools\": false, \"is_retain_subagent_in_toolset\": false, \"top_k_tools\": 10, \"is_retrieve_even_if_tools_scarce\": true, \"short_memory_size\": 10, \"intent_understanding_agent\": null, \"is_retain_master_short_memory\": false, \"team_size\": 1, \"max_react_rounds\": 16, \"is_discard_react_memory\": true, \"memory_max_tokens\": 24800, \"weight_short_memory\": 5, \"weight_react_memory\": 1, \"trust_mode\": false}, \"arguments\": {\"query\": \"圆周率30位\", \"short_memory\": [], \"tools_description\": \"\\nTool: math_agent\\nDescription: 一个可以查询圆周率的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\\n\\n\\nTool: time_agent\\nDescription: 一个可以查询时间的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\"}}",
        "output": "圆周率的前30位是：3.14159265358979323846264338328",
        "update_time": "2025-07-02 19:15:08.327883000",
        "index": 0,
        "post_node_ids": [],
        "child_node_ids": [
            "7AfVpVjybuz4dr2F",
            "7vW4LQNpkj8hscbz",
            "UDwQUU6VXiWKsvu7"
        ],
        "id": "95BdVFvowzzT97Kd",
        "name": "master_agent",
        "subgraph": "user"
    },
    {
        "node_id": "7AfVpVjybuz4dr2F",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "master_agent",
        "callee": "qwen32b",
        "parallel_id": "roxT9DM6CJfE7tvG",
        "father_node_id": "95BdVFvowzzT97Kd",
        "call_stack": [
            "user",
            "master_agent",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7AfVpVjybuz4dr2F"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:00.161762000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，可以使用这些工具：\\n\\nTool: math_agent\\nDescription: 一个可以查询圆周率的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\\n\\n\\nTool: time_agent\\nDescription: 一个可以查询时间的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\"}, {\"role\": \"user\", \"content\": \"圆周率30位\"}]}}",
        "output": "```json\n{\n    \"think\": \"用户需要知道圆周率的前30位数字，应该使用math_agent来获取这些信息。\",\n    \"tool_name\": \"math_agent\",\n    \"arguments\": {\n        \"query\": \"圆周率30位\"\n    }\n}\n```",
        "update_time": "2025-07-02 19:15:02.524734000",
        "index": 1,
        "post_node_ids": [
            "7vW4LQNpkj8hscbz"
        ],
        "child_node_ids": [],
        "id": "7AfVpVjybuz4dr2F",
        "next": "7vW4LQNpkj8hscbz",
        "name": "qwen32b",
        "subgraph": "master_agent"
    },
    {
        "node_id": "7vW4LQNpkj8hscbz",
        "node_type": "agent",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "master_agent",
        "callee": "math_agent",
        "parallel_id": "n46XXqhnDJhqxMBH",
        "father_node_id": "95BdVFvowzzT97Kd",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz"
        ],
        "pre_node_ids": [
            "7AfVpVjybuz4dr2F"
        ],
        "create_time": "2025-07-02 19:15:02.526997000",
        "input": "{\"class_attr\": {\"class_name\": \"WorkflowAgent\", \"is_master\": false, \"llm_model\": \"qwen32b\", \"prompt\": \"\", \"sub_agents\": [\"time_agent\"], \"tools\": [\"math_tools\"], \"except_tools\": [], \"is_sourcing_tools\": false, \"is_retain_subagent_in_toolset\": false, \"top_k_tools\": 10, \"is_retrieve_even_if_tools_scarce\": true, \"short_memory_size\": 10, \"intent_understanding_agent\": null, \"is_retain_master_short_memory\": false, \"team_size\": 1}, \"arguments\": {\"query\": \"圆周率30位\", \"short_memory\": [], \"tools_description\": \"\\nTool: time_agent\\nDescription: 一个可以查询时间的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\\n\\n\\nTool: power\\nDescription: 一个求幂工具，返回n的m次方的结果\\nArguments:\\n- n: int, 底数 (required)\\n- m: int, 指数\\n\\n\\n\\nTool: pi\\nDescription: 一个知道圆周率的工具\\nArguments:\\n- prec: int, 小数点后多少位 (required)\\n\"}}",
        "output": "保留小数点后30位: 3.14159265358979323846264338328",
        "update_time": "2025-07-02 19:15:05.919765000",
        "index": 2,
        "post_node_ids": [
            "UDwQUU6VXiWKsvu7"
        ],
        "child_node_ids": [
            "dfmWPATDFBohrySy",
            "szoDQZeUqB94hf6Q"
        ],
        "id": "7vW4LQNpkj8hscbz",
        "next": "UDwQUU6VXiWKsvu7",
        "name": "math_agent",
        "subgraph": "master_agent"
    },
    {
        "node_id": "dfmWPATDFBohrySy",
        "node_type": "agent",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "math_agent",
        "callee": "time_agent",
        "parallel_id": "6bziwkYty9e7qT5c",
        "father_node_id": "7vW4LQNpkj8hscbz",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:02.535605000",
        "input": "{\"class_attr\": {\"class_name\": \"ParallelAgent\", \"is_master\": false, \"llm_model\": \"qwen32b\", \"prompt\": \"\", \"sub_agents\": [], \"tools\": [], \"except_tools\": [], \"is_sourcing_tools\": false, \"is_retain_subagent_in_toolset\": false, \"top_k_tools\": 10, \"is_retrieve_even_if_tools_scarce\": true, \"short_memory_size\": 10, \"intent_understanding_agent\": null, \"is_retain_master_short_memory\": false, \"team_size\": 1}, \"arguments\": {\"query\": \"现在几点\", \"short_memory\": [], \"tools_description\": \"\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\"}}",
        "output": "当前时间是19:15。",
        "update_time": "2025-07-02 19:15:05.883405000",
        "index": 3,
        "post_node_ids": [
            "szoDQZeUqB94hf6Q"
        ],
        "child_node_ids": [
            "JNVCe4gXohVBu4cB",
            "kzdeHex8YLt8xH3k",
            "iHCfdSZXPmzeaFPs"
        ],
        "id": "dfmWPATDFBohrySy",
        "next": "szoDQZeUqB94hf6Q",
        "name": "time_agent",
        "subgraph": "math_agent"
    },
    {
        "node_id": "JNVCe4gXohVBu4cB",
        "node_type": "agent",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent",
        "callee": "time_agent_1",
        "parallel_id": "FCcGxCHtKHE3ZTC4",
        "father_node_id": "dfmWPATDFBohrySy",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_1"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "JNVCe4gXohVBu4cB"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:02.538921000",
        "input": "{\"class_attr\": {\"class_name\": \"ReActAgent\", \"is_master\": false, \"llm_model\": \"qwen32b\", \"prompt\": \"\\n你是一个乐于助人的助手，可以使用这些工具：\\n${tools_description}\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\\n\", \"sub_agents\": [], \"tools\": [\"time\"], \"except_tools\": [], \"is_sourcing_tools\": false, \"is_retain_subagent_in_toolset\": false, \"top_k_tools\": 10, \"is_retrieve_even_if_tools_scarce\": true, \"short_memory_size\": 10, \"intent_understanding_agent\": null, \"is_retain_master_short_memory\": false, \"team_size\": 2, \"max_react_rounds\": 16, \"is_discard_react_memory\": true, \"memory_max_tokens\": 24800, \"weight_short_memory\": 5, \"weight_react_memory\": 1, \"trust_mode\": false}, \"arguments\": {\"query\": \"现在几点\", \"short_memory\": [], \"tools_description\": \"\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\"}}",
        "output": "当前时间是19:15。",
        "update_time": "2025-07-02 19:15:05.121098000",
        "index": 4,
        "post_node_ids": [
            "iHCfdSZXPmzeaFPs"
        ],
        "child_node_ids": [
            "MsmQ72SLk4wzHFhE",
            "kCJRPQ8fnw23bmmu",
            "9GTJftBxVAGphJxC"
        ],
        "id": "JNVCe4gXohVBu4cB",
        "next": "iHCfdSZXPmzeaFPs",
        "name": "time_agent_1",
        "subgraph": "time_agent"
    },
    {
        "node_id": "kzdeHex8YLt8xH3k",
        "node_type": "agent",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent",
        "callee": "time_agent_2",
        "parallel_id": "FCcGxCHtKHE3ZTC4",
        "father_node_id": "dfmWPATDFBohrySy",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_2"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "kzdeHex8YLt8xH3k"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:02.539058000",
        "input": "{\"class_attr\": {\"class_name\": \"ReActAgent\", \"is_master\": false, \"llm_model\": \"qwen32b\", \"prompt\": \"\\n你是一个乐于助人的助手，可以使用这些工具：\\n${tools_description}\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\\n\", \"sub_agents\": [], \"tools\": [\"time\"], \"except_tools\": [], \"is_sourcing_tools\": false, \"is_retain_subagent_in_toolset\": false, \"top_k_tools\": 10, \"is_retrieve_even_if_tools_scarce\": true, \"short_memory_size\": 10, \"intent_understanding_agent\": null, \"is_retain_master_short_memory\": false, \"team_size\": 2, \"max_react_rounds\": 16, \"is_discard_react_memory\": true, \"memory_max_tokens\": 24800, \"weight_short_memory\": 5, \"weight_react_memory\": 1, \"trust_mode\": false}, \"arguments\": {\"query\": \"现在几点\", \"short_memory\": [], \"tools_description\": \"\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\"}}",
        "output": "当前时间是19:15。",
        "update_time": "2025-07-02 19:15:05.224721000",
        "index": 5,
        "post_node_ids": [
            "iHCfdSZXPmzeaFPs"
        ],
        "child_node_ids": [
            "HF3u4itUY9H7mqbk",
            "wpn55tTBBzcSvzyP",
            "ZNCPeTGaK83RCcUU"
        ],
        "id": "kzdeHex8YLt8xH3k",
        "next": "iHCfdSZXPmzeaFPs",
        "name": "time_agent_2",
        "subgraph": "time_agent"
    },
    {
        "node_id": "MsmQ72SLk4wzHFhE",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent_1",
        "callee": "qwen32b",
        "parallel_id": "m9EUZJbZVyKQ2gsB",
        "father_node_id": "JNVCe4gXohVBu4cB",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_1",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "JNVCe4gXohVBu4cB",
            "MsmQ72SLk4wzHFhE"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:02.541514000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，可以使用这些工具：\\n\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\"}, {\"role\": \"user\", \"content\": \"现在几点\"}]}}",
        "output": "```json\n{\n    \"think\": \"用户想知道当前的时间，应该调用get_current_time函数来获取当前时间。\",\n    \"tool_name\": \"get_current_time\",\n    \"arguments\": {\n        \"timezone\": \"Asia/Shanghai\"\n    }\n}\n```",
        "update_time": "2025-07-02 19:15:04.616749000",
        "index": 6,
        "post_node_ids": [
            "kCJRPQ8fnw23bmmu"
        ],
        "child_node_ids": [],
        "id": "MsmQ72SLk4wzHFhE",
        "next": "kCJRPQ8fnw23bmmu",
        "name": "qwen32b",
        "subgraph": "time_agent_1"
    },
    {
        "node_id": "HF3u4itUY9H7mqbk",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent_2",
        "callee": "qwen32b",
        "parallel_id": "kkMEWLTDfweCcCvQ",
        "father_node_id": "kzdeHex8YLt8xH3k",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_2",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "kzdeHex8YLt8xH3k",
            "HF3u4itUY9H7mqbk"
        ],
        "pre_node_ids": [],
        "create_time": "2025-07-02 19:15:02.543943000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，可以使用这些工具：\\n\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\"}, {\"role\": \"user\", \"content\": \"现在几点\"}]}}",
        "output": "```json\n{\n    \"think\": \"用户想知道当前的时间，应该调用get_current_time函数来获取当前时间。\",\n    \"tool_name\": \"get_current_time\",\n    \"arguments\": {\n        \"timezone\": \"Asia/Shanghai\"\n    }\n}\n```",
        "update_time": "2025-07-02 19:15:04.617126000",
        "index": 7,
        "post_node_ids": [
            "wpn55tTBBzcSvzyP"
        ],
        "child_node_ids": [],
        "id": "HF3u4itUY9H7mqbk",
        "next": "wpn55tTBBzcSvzyP",
        "name": "qwen32b",
        "subgraph": "time_agent_2"
    },
    {
        "node_id": "kCJRPQ8fnw23bmmu",
        "node_type": "tool",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent_1",
        "callee": "get_current_time",
        "parallel_id": "AzFbuxTFfdpnvYeY",
        "father_node_id": "JNVCe4gXohVBu4cB",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_1",
            "get_current_time"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "JNVCe4gXohVBu4cB",
            "kCJRPQ8fnw23bmmu"
        ],
        "pre_node_ids": [
            "MsmQ72SLk4wzHFhE"
        ],
        "create_time": "2025-07-02 19:15:04.617697000",
        "input": "{\"class_attr\": {\"class_name\": \"StdioMCPClient\", \"server_name\": \"time\"}, \"arguments\": {\"timezone\": \"Asia/Shanghai\"}}",
        "output": "{\n  \"timezone\": \"Asia/Shanghai\",\n  \"datetime\": \"2025-07-02T19:15:04+08:00\",\n  \"is_dst\": false\n}",
        "update_time": "2025-07-02 19:15:04.642355000",
        "index": 8,
        "post_node_ids": [
            "9GTJftBxVAGphJxC"
        ],
        "child_node_ids": [],
        "id": "kCJRPQ8fnw23bmmu",
        "next": "9GTJftBxVAGphJxC",
        "name": "get_current_time",
        "subgraph": "time_agent_1"
    },
    {
        "node_id": "wpn55tTBBzcSvzyP",
        "node_type": "tool",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent_2",
        "callee": "get_current_time",
        "parallel_id": "yZU6bJ3tWcvFWRBg",
        "father_node_id": "kzdeHex8YLt8xH3k",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_2",
            "get_current_time"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "kzdeHex8YLt8xH3k",
            "wpn55tTBBzcSvzyP"
        ],
        "pre_node_ids": [
            "HF3u4itUY9H7mqbk"
        ],
        "create_time": "2025-07-02 19:15:04.618089000",
        "input": "{\"class_attr\": {\"class_name\": \"StdioMCPClient\", \"server_name\": \"time\"}, \"arguments\": {\"timezone\": \"Asia/Shanghai\"}}",
        "output": "{\n  \"timezone\": \"Asia/Shanghai\",\n  \"datetime\": \"2025-07-02T19:15:04+08:00\",\n  \"is_dst\": false\n}",
        "update_time": "2025-07-02 19:15:04.643132000",
        "index": 9,
        "post_node_ids": [
            "ZNCPeTGaK83RCcUU"
        ],
        "child_node_ids": [],
        "id": "wpn55tTBBzcSvzyP",
        "next": "ZNCPeTGaK83RCcUU",
        "name": "get_current_time",
        "subgraph": "time_agent_2"
    },
    {
        "node_id": "9GTJftBxVAGphJxC",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent_1",
        "callee": "qwen32b",
        "parallel_id": "VTpiA4hBfRirbZft",
        "father_node_id": "JNVCe4gXohVBu4cB",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_1",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "JNVCe4gXohVBu4cB",
            "9GTJftBxVAGphJxC"
        ],
        "pre_node_ids": [
            "kCJRPQ8fnw23bmmu"
        ],
        "create_time": "2025-07-02 19:15:04.643091000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，可以使用这些工具：\\n\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\"}, {\"role\": \"user\", \"content\": \"现在几点\"}, {\"role\": \"assistant\", \"content\": \"```json\\n{\\n    \\\"think\\\": \\\"用户想知道当前的时间，应该调用get_current_time函数来获取当前时间。\\\",\\n    \\\"tool_name\\\": \\\"get_current_time\\\",\\n    \\\"arguments\\\": {\\n        \\\"timezone\\\": \\\"Asia/Shanghai\\\"\\n    }\\n}\\n```\"}, {\"role\": \"user\", \"content\": \"Tool [get_current_time] execution result: {\\n  \\\"timezone\\\": \\\"Asia/Shanghai\\\",\\n  \\\"datetime\\\": \\\"2025-07-02T19:15:04+08:00\\\",\\n  \\\"is_dst\\\": false\\n}\"}]}}",
        "output": "当前时间是19:15。",
        "update_time": "2025-07-02 19:15:05.120005000",
        "index": 10,
        "post_node_ids": [],
        "child_node_ids": [],
        "id": "9GTJftBxVAGphJxC",
        "name": "qwen32b",
        "subgraph": "time_agent_1"
    },
    {
        "node_id": "ZNCPeTGaK83RCcUU",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent_2",
        "callee": "qwen32b",
        "parallel_id": "7smUhmWfUFSCJXNA",
        "father_node_id": "kzdeHex8YLt8xH3k",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "time_agent_2",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "kzdeHex8YLt8xH3k",
            "ZNCPeTGaK83RCcUU"
        ],
        "pre_node_ids": [
            "wpn55tTBBzcSvzyP"
        ],
        "create_time": "2025-07-02 19:15:04.643555000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，可以使用这些工具：\\n\\nTool: get_current_time\\nDescription: Get current time in a specific timezones\\nArguments:\\n- timezone: string, IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no timezone provided by the user. (required)\\n\\n\\n\\nTool: convert_time\\nDescription: Convert time between timezones\\nArguments:\\n- source_timezone: string, Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use 'Asia/Shanghai' as local timezone if no source timezone provided by the user. (required)\\n- time: string, Time to convert in 24-hour format (HH:MM) (required)\\n- target_timezone: string, Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use 'Asia/Shanghai' as local timezone if no target timezone provided by the user. (required)\\n\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\"}, {\"role\": \"user\", \"content\": \"现在几点\"}, {\"role\": \"assistant\", \"content\": \"```json\\n{\\n    \\\"think\\\": \\\"用户想知道当前的时间，应该调用get_current_time函数来获取当前时间。\\\",\\n    \\\"tool_name\\\": \\\"get_current_time\\\",\\n    \\\"arguments\\\": {\\n        \\\"timezone\\\": \\\"Asia/Shanghai\\\"\\n    }\\n}\\n```\"}, {\"role\": \"user\", \"content\": \"Tool [get_current_time] execution result: {\\n  \\\"timezone\\\": \\\"Asia/Shanghai\\\",\\n  \\\"datetime\\\": \\\"2025-07-02T19:15:04+08:00\\\",\\n  \\\"is_dst\\\": false\\n}\"}]}}",
        "output": "当前时间是19:15。",
        "update_time": "2025-07-02 19:15:05.223410000",
        "index": 11,
        "post_node_ids": [],
        "child_node_ids": [],
        "id": "ZNCPeTGaK83RCcUU",
        "name": "qwen32b",
        "subgraph": "time_agent_2"
    },
    {
        "node_id": "iHCfdSZXPmzeaFPs",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "time_agent",
        "callee": "qwen32b",
        "parallel_id": "FgkBtrJDWVjCLveW",
        "father_node_id": "dfmWPATDFBohrySy",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "time_agent",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "dfmWPATDFBohrySy",
            "iHCfdSZXPmzeaFPs"
        ],
        "pre_node_ids": [
            "JNVCe4gXohVBu4cB",
            "kzdeHex8YLt8xH3k"
        ],
        "create_time": "2025-07-02 19:15:05.229654000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，用户问题是：现在几点。\\n请将以下的多个助手的回答，总结成一个最终回答。\"}, {\"role\": \"user\", \"content\": \"以下是多次结果：\\n1. 当前时间是19:15。\\n2. 当前时间是19:15。\"}]}}",
        "output": "当前时间是19:15。",
        "update_time": "2025-07-02 19:15:05.882550000",
        "index": 12,
        "post_node_ids": [],
        "child_node_ids": [],
        "id": "iHCfdSZXPmzeaFPs",
        "name": "qwen32b",
        "subgraph": "time_agent"
    },
    {
        "node_id": "szoDQZeUqB94hf6Q",
        "node_type": "tool",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "math_agent",
        "callee": "pi",
        "parallel_id": "6BwKzWkL4kR7qcj7",
        "father_node_id": "7vW4LQNpkj8hscbz",
        "call_stack": [
            "user",
            "master_agent",
            "math_agent",
            "pi"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "7vW4LQNpkj8hscbz",
            "szoDQZeUqB94hf6Q"
        ],
        "pre_node_ids": [
            "dfmWPATDFBohrySy"
        ],
        "create_time": "2025-07-02 19:15:05.884891000",
        "input": "{\"class_attr\": {\"class_name\": \"FunctionHub\"}, \"arguments\": {\"prec\": 30}}",
        "output": "3.14159265358979323846264338328",
        "update_time": "2025-07-02 19:15:05.918624000",
        "index": 13,
        "post_node_ids": [],
        "child_node_ids": [],
        "id": "szoDQZeUqB94hf6Q",
        "name": "pi",
        "subgraph": "math_agent"
    },
    {
        "node_id": "UDwQUU6VXiWKsvu7",
        "node_type": "llm",
        "trace_id": "b9rrVqR8y3mwCZcW",
        "caller": "master_agent",
        "callee": "qwen32b",
        "parallel_id": "xHTnMM9cbzzrBqKZ",
        "father_node_id": "95BdVFvowzzT97Kd",
        "call_stack": [
            "user",
            "master_agent",
            "qwen32b"
        ],
        "node_id_stack": [
            "",
            "95BdVFvowzzT97Kd",
            "UDwQUU6VXiWKsvu7"
        ],
        "pre_node_ids": [
            "7vW4LQNpkj8hscbz"
        ],
        "create_time": "2025-07-02 19:15:05.920791000",
        "input": "{\"class_attr\": {\"class_name\": \"HttpLLM\", \"llm_params\": {\"temperature\": 0.01}, \"is_send_think\": true, \"is_convert_url_to_base64\": false, \"max_image_pixels\": 10000000, \"max_video_size\": 12582912, \"api_key\": \"EMPTY\", \"base_url\": \"http://llm32b.jd.com/v1/chat/completions\", \"model_name\": \"qwen25-32b-native\"}, \"arguments\": {\"messages\": [{\"role\": \"system\", \"content\": \"你是一个乐于助人的助手，可以使用这些工具：\\n\\nTool: math_agent\\nDescription: 一个可以查询圆周率的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\\n\\n\\nTool: time_agent\\nDescription: 一个可以查询时间的工具\\nArguments:\\n- query: string, 查询的问题 (required)\\n\\n\\n根据用户的问题选择合适的工具。\\n如果不需要工具，直接回复。\\n如果回答用户的问题需要调用多次工具，每次只调用一个工具，用户收到工具后，会给你反馈工具调用结果。\\n\\n重要提示：\\n1. 当你收集到的信息足够回答用户问题时，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你的回答内容\\n2. 当你发现用户问题缺乏条件时，你可以反问用户，请按以下格式回答：\\n<think>你的思考（如果需要分析）</think>\\n你反问用户的问题\\n3. 当你需要使用一个工具时，你必须只响应下面确切的JSON对象格式，别无其他：\\n```json\\n{\\n    \\\"think\\\": \\\"你的思考（如果需要分析）\\\",\\n    \\\"tool_name\\\": \\\"工具名称\\\",\\n    \\\"arguments\\\": {\\n        \\\"参数名\\\": \\\"参数值\\\"\\n    }\\n}\\n```\\n\\n在收到工具的响应后：\\n1. 将原始数据转换为自然的会话响应\\n2. 回答要简洁但内容丰富\\n3. 关注最相关的信息\\n4. 从用户的问题中使用适当的上下文\\n5. 避免简单地重复原始数据\\n\\n请仅使用上面明确定义的工具。\"}, {\"role\": \"user\", \"content\": \"圆周率30位\"}, {\"role\": \"assistant\", \"content\": \"```json\\n{\\n    \\\"think\\\": \\\"用户需要知道圆周率的前30位数字，应该使用math_agent来获取这些信息。\\\",\\n    \\\"tool_name\\\": \\\"math_agent\\\",\\n    \\\"arguments\\\": {\\n        \\\"query\\\": \\\"圆周率30位\\\"\\n    }\\n}\\n```\"}, {\"role\": \"user\", \"content\": \"Tool [math_agent] execution result: 保留小数点后30位: 3.14159265358979323846264338328\"}]}}",
        "output": "<think>我已经从math_agent那里得到了圆周率的前30位数字。</think>\n圆周率的前30位是：3.14159265358979323846264338328",
        "update_time": "2025-07-02 19:15:08.327117000",
        "index": 14,
        "post_node_ids": [],
        "child_node_ids": [],
        "id": "UDwQUU6VXiWKsvu7",
        "name": "qwen32b",
        "subgraph": "master_agent"
    }
]
