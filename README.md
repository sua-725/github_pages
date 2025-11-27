<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>P5.js Assignment Showcase</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;600&display=swap" rel="stylesheet">

  <style>
    body {
      margin: 0;
      font-family: 'Pretendard', sans-serif;
      background: linear-gradient(145deg, #f6f7ff, #e7ebff);
      text-align: center;
      padding: 60px 20px;
    }

    h1 {
      font-size: 36px;
      margin-bottom: 40px;
      color: #2a2a2a;
      font-weight: 600;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
      max-width: 650px;
      margin: 0 auto 40px;
    }

    .card {
      background: white;
      padding: 30px 10px;
      border-radius: 18px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      font-size: 20px;
      font-weight: 600;
      transition: 0.2s;
      cursor: pointer;
      border: 1px solid #eee;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.15);
    }

    iframe {
      margin-top: 40px;
      width: 100%;
      max-width: 850px;
      height: 600px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      display: none;
    }
  </style>
</head>
<body>

  <h1>P5.js Assignment Showcase</h1>

  <div class="grid">
    <div class="card" onclick="showFrame(1)">과제 1</div>
    <div class="card" onclick="showFrame(4)">과제 4</div>
    <div class="card" onclick="showFrame(2)">과제 2</div>
    <div class="card" onclick="showFrame(3)">과제 3</div>
  </div>

  <!-- iframe 4개 (sketches 링크 적용됨) -->
  <iframe id="frame1" src="https://editor.p5js.org/ksaj0725/sketches/T0tJNzlBS"></iframe>
  <iframe id="frame2" src="https://editor.p5js.org/ksaj0725/sketches/_Z1GOpqLk"></iframe>
  <iframe id="frame3" src="https://editor.p5js.org/ksaj0725/sketches/XlsEZOzlN"></iframe>
  <iframe id="frame4" src="https://editor.p5js.org/ksaj0725/sketches/KDTGxkIqr"></iframe>

  <script>
    function showFrame(num) {
      document.querySelectorAll("iframe").forEach(f => f.style.display = "none");
      document.getElementById("frame" + num).style.display = "block";
    }
  </script>

</body>
</html>
