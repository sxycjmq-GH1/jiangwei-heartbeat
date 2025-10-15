console.log("多节点心跳仪式开启");

const render = [
  {
    name: "Vless WebSocket",
    url: "https://jiangwei-vless-node.onrender.com/healthz"
  }
  // 可扩展更多节点
  // {
  //   name: "视频节点",
  //   url: "https://jiangwei-videos-node.onrender.com/healthz"
  // },
  // {
  //   name: "代理节点",
  //   url: "https://jiangwei-proxy-node.onrender.com/healthz"
  // }
];

let count = 0;

async function checkHealthz(path) {
  try {
    const res = await fetch(path);
    return (await res.text()).includes("WebSocket server is running");
  } catch (err) {
    return false;
  }
}

async function heartbeat() {
  let success = 0;
  for (const node of render) {
    const alive = await checkHealthz(node.url);
    if (alive) {
      success++;
      console.log(`✅ ${node.name} 心跳成功`);
    } else {
      console.warn(`❌ ${node.name} 心跳失败`);
    }
    await new Promise(resolve => setTimeout(resolve, 10000)); // 节点间隔 10 秒
  }

  count++;
  const status = document.getElementById("heartbeat");
  status.textContent = `第 ${count} 次轮询完成，成功节点：${success}/${render.length}`;
}

heartbeat(); // 首次心跳
setInterval(heartbeat, 10 * 60 * 1000); // 每 10 分钟轮询一次
