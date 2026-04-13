const questions = [
  {
    title: "1. 早读前 10 分钟，你通常是？",
    options: [
      { text: "先开书进入状态", points: { plan: 2, steady: 1 } },
      { text: "先聊两句再进", points: { social: 2 } },
      { text: "还在回魂，慢慢启动", points: { night: 2, drift: 1 } }
    ]
  },
  {
    title: "2. 老师提问时你更可能？",
    options: [
      { text: "主动举手，先说先赢", points: { social: 2, execute: 1 } },
      { text: "心里会但先观察", points: { quiet: 2, steady: 1 } },
      { text: "看状态，有灵感就冲", points: { drift: 2 } }
    ]
  },
  {
    title: "3. 作业节奏通常是？",
    options: [
      { text: "提前拆任务，稳步完成", points: { plan: 2, steady: 1 } },
      { text: "分段做，按压力调速", points: { steady: 2 } },
      { text: "最后冲刺，一把梭哈", points: { clutch: 3 } }
    ]
  },
  {
    title: "4. 小组任务里你更像？",
    options: [
      { text: "推进者，定目标抓进度", points: { execute: 3 } },
      { text: "协调者，照顾团队氛围", points: { social: 3 } },
      { text: "补位者，哪里漏补哪里", points: { quiet: 2, steady: 1 } }
    ]
  },
  {
    title: "5. 月考前一晚你会？",
    options: [
      { text: "按复习表收尾", points: { plan: 2, steady: 1 } },
      { text: "优先补短板", points: { execute: 2 } },
      { text: "压力上来才进入战斗态", points: { clutch: 2, drift: 1 } }
    ]
  },
  {
    title: "6. 课间 10 分钟你常见状态？",
    options: [
      { text: "找同学聊天切换脑子", points: { social: 2 } },
      { text: "坐着恢复电量", points: { quiet: 2 } },
      { text: "随机漫步，顺便神游", points: { drift: 2 } }
    ]
  },
  {
    title: "7. 面对连续难题时你一般？",
    options: [
      { text: "拆成小步逐个突破", points: { plan: 2 } },
      { text: "先跳过，回头补丁修复", points: { quiet: 1, clutch: 1 } },
      { text: "先焦虑，再高压爆发", points: { clutch: 2 } }
    ]
  },
  {
    title: "8. 晚修效率最高的时段是？",
    options: [
      { text: "前段，刚开始就专注", points: { execute: 2, steady: 1 } },
      { text: "中段，热起来最稳", points: { steady: 2 } },
      { text: "后段，越晚越清醒", points: { night: 3 } }
    ]
  },
  {
    title: "9. 同学来问你题目，你通常？",
    options: [
      { text: "直接讲思路并延展", points: { social: 2, execute: 1 } },
      { text: "简洁给关键步骤", points: { quiet: 2 } },
      { text: "看关系和状态决定深浅", points: { drift: 1, social: 1 } }
    ]
  },
  {
    title: "10. 你希望别人怎么评价你在宣卿？",
    options: [
      { text: "靠谱、能扛、推进快", points: { execute: 2, plan: 1 } },
      { text: "稳定、细致、可持续", points: { steady: 2, quiet: 1 } },
      { text: "有趣、有梗、有灵气", points: { drift: 2, social: 1 } }
    ]
  }
];

const types = {
  BELL0: {
    name: "BELL-0（铃响即战）",
    desc: "你对节奏和目标极度敏感，常常在别人热身时已经推进到关键节点。",
    bullets: ["执行力强，能快速定方向", "任务拆解清晰，时间管理稳定", "容易对慢节奏同伴不耐烦"],
    mbti: "镜像：ESTJ / ENTJ"
  },
  NOTE_R: {
    name: "NOTE-R（满页笔记）",
    desc: "你擅长结构化学习，重视细节与复盘，属于“慢热但稳产”的选手。",
    bullets: ["知识框架清楚，复习效率高", "对流程和秩序有要求", "需要防止过度打磨影响速度"],
    mbti: "镜像：ISTJ / INTJ"
  },
  ASK_UP: {
    name: "ASK-UP（举手王）",
    desc: "你通过互动激活思考，表达和碰撞本身就是你的学习方式。",
    bullets: ["课堂参与度高，反馈快", "善于带动讨论氛围", "需注意表达快于论证完整度"],
    mbti: "镜像：ENFP / ENTP"
  },
  QUIET_X: {
    name: "QUIET-X（安静核）",
    desc: "你偏向低噪高效，习惯独立推进，常以“结果说话”。",
    bullets: ["抗干扰强，能长期专注", "独立解题能力突出", "可能被误解为不合群"],
    mbti: "镜像：INTP / ISTP"
  },
  CARE_PLUS: {
    name: "CARE+（后排补给站）",
    desc: "你在团队里承担情绪与关系维护，常是班级稳定器。",
    bullets: ["同理心高，愿意支持他人", "组织与协调能力好", "要给自己留出恢复空间"],
    mbti: "镜像：ESFJ / ENFJ"
  },
  CLUTCH: {
    name: "CLUTCH（极限翻盘）",
    desc: "你在压力场中会被点燃，关键时刻爆发力强，擅长逆风抢分。",
    bullets: ["临场状态强，冲刺能力高", "面对突发变化适应快", "需避免长期依赖高压驱动"],
    mbti: "镜像：ESTP / ENTP"
  },
  NIGHT_OWL: {
    name: "NIGHT-OWL（夜航员）",
    desc: "你常在夜间进入深度专注，思考连贯但昼夜节律容易错位。",
    bullets: ["夜间效率高，适合深度任务", "独立完成复杂任务能力强", "要控制作息透支风险"],
    mbti: "镜像：INTJ / INTP"
  },
  DRIFT: {
    name: "DRIFT（神游体）",
    desc: "你靠灵感与情境驱动，创造性和感受力强，状态波动也更明显。",
    bullets: ["创意多，联想能力强", "对单调任务耐受度低", "可借助番茄钟提高稳定性"],
    mbti: "镜像：INFP / ENFP"
  },
  STEADY: {
    name: "STEADY（匀速机）",
    desc: "你不追求戏剧化爆发，而是通过长期稳定输出积累优势。",
    bullets: ["节奏均衡，风险较低", "日常维护能力强", "需防止过于保守错失机会"],
    mbti: "镜像：ISFJ / ISTJ"
  }
};

const state = {
  started: false,
  index: 0,
  answers: new Array(questions.length).fill(null)
};

const startBtn = document.getElementById("startBtn");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const questionTitle = document.getElementById("questionTitle");
const progressText = document.getElementById("progressText");
const optionsBox = document.getElementById("optionsBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const resultCode = document.getElementById("resultCode");
const resultDesc = document.getElementById("resultDesc");
const resultBullets = document.getElementById("resultBullets");
const resultMbti = document.getElementById("resultMbti");

function renderQuestion() {
  const q = questions[state.index];
  questionTitle.textContent = q.title;
  progressText.textContent = `${state.index + 1} / ${questions.length}`;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-item";
    if (state.answers[state.index] === idx) btn.classList.add("active");
    btn.textContent = opt.text;
    btn.addEventListener("click", () => {
      state.answers[state.index] = idx;
      renderQuestion();
    });
    optionsBox.appendChild(btn);
  });

  prevBtn.disabled = state.index === 0;
  nextBtn.textContent = state.index === questions.length - 1 ? "查看结果" : "下一题";
}

function sumScores() {
  const score = {
    plan: 0,
    execute: 0,
    social: 0,
    quiet: 0,
    night: 0,
    clutch: 0,
    drift: 0,
    steady: 0
  };

  questions.forEach((q, i) => {
    const selected = state.answers[i];
    if (selected === null) return;
    const points = q.options[selected].points;
    Object.keys(points).forEach((k) => {
      score[k] += points[k];
    });
  });

  return score;
}

function pickType(score) {
  if (score.execute >= 7 && score.plan >= 5) return types.BELL0;
  if (score.plan >= 7 && score.steady >= 5) return types.NOTE_R;
  if (score.social >= 7 && score.execute >= 4) return types.ASK_UP;
  if (score.quiet >= 7 && score.steady >= 4) return types.QUIET_X;
  if (score.social >= 7 && score.steady >= 4) return types.CARE_PLUS;
  if (score.clutch >= 6) return types.CLUTCH;
  if (score.night >= 6) return types.NIGHT_OWL;
  if (score.drift >= 6) return types.DRIFT;
  return types.STEADY;
}

function showResult() {
  const score = sumScores();
  const type = pickType(score);
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  resultCode.textContent = type.name;
  resultDesc.textContent = type.desc;
  resultMbti.textContent = type.mbti;
  resultBullets.innerHTML = "";
  type.bullets.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    resultBullets.appendChild(li);
  });
}

startBtn.addEventListener("click", () => {
  state.started = true;
  state.index = 0;
  state.answers.fill(null);
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.answers[state.index] === null) {
    alert("先选一个答案再继续。");
    return;
  }
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  state.index = 0;
  state.answers.fill(null);
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  renderQuestion();
});
