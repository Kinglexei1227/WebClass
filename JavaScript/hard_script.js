    const canvas = document.getElementById("treeCanvas");
    const ctx = canvas.getContext("2d");

    function drawBranch(x, y, length, angle, depth, branchWidth) {
      if (depth === 0) return;

      ctx.beginPath();
      ctx.save();

      ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
      ctx.lineWidth = branchWidth;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.stroke();

      drawBranch(0, -length, length * 0.7, angle - 0.5, depth - 1, branchWidth * 0.7);
      drawBranch(0, -length, length * 0.7, angle + 0.5, depth - 1, branchWidth * 0.7);

      ctx.restore();
    }

    // 초기 설정
    drawBranch(400, 600, 100, -Math.PI / 2, 10, 10);