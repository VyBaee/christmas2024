// Popup mở và đóng
function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Hiệu ứng tuyết rơi
  const canvas = document.getElementById('snowfall');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const snowflakes = [];
  
  function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speedY: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5
      });
    }
  }
  
  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    snowflakes.forEach(flake => {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });
    ctx.fill();
    moveSnowflakes();
  }
  
  function moveSnowflakes() {
    snowflakes.forEach(flake => {
      flake.y += flake.speedY;
      flake.x += flake.speedX;
  
      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }
    });
  }
  
  function updateSnowfall() {
    drawSnowflakes();
    requestAnimationFrame(updateSnowfall);
  }
  
  createSnowflakes();
  updateSnowfall();
  
  // Cập nhật kích thước canvas khi thay đổi kích thước cửa sổ
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  // Di chuyển ông già Noel qua màn hình
  function moveSanta() {
    const santa = document.getElementById('santa');
    let position = -200;

    function animate() {
        position += 0.65;
        santa.style.right = position + 'px';

        if (position < window.innerWidth) {
            requestAnimationFrame(animate);
        } else {
            position = -200;
            requestAnimationFrame(animate);
        }
    }

    animate();
  }

  moveSanta();