<style>
  body{
    margin: 0px;
    padding: 0px;
  }
  #banner {
    position: relative;
    overflow: hidden;
    height: 500px;
  }
  video {
    position: absolute;
    z-index: -100;
    background-size: cover;
  }
  .sbox {
    position:relative;
    z-index: 0;
    margin-left:5%;
    margin-top:10%;
    margin-bottom: 5%;
    margin-right:20%;
    border-radius: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    -ms-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    -o-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    background-color:rgba(0, 0, 0, 0.2)
  }
  .maintext {
    position: relative;
    z-index: 100;
    margin-left:5%;
    margin-right:5%;
  }
  .maintext h1 {
    color: white;
    font-size:50px;
    text-shadow: 0 0 8px #000;
  }
  .maintext p {
    color: white;
    font-size:18px;
    text-shadow: 0 0 5px #000;
  }
  .seed-footer{
    margin-top: 50px;
    margin-bottom: 50px;

    margin-left: 20px;
    margin-right: auto;

    padding-left: 10px;
    width: 1280px;
  }

</style>

<div id="banner">
  <video autoplay loop muted width="100%">
    <source src="assets/monkeytester.mp4" type="video/mp4">
  </video>
  <div class="sbox">
    <div class="maintext">
      <h1>physical monkey tester</h1>
      <p>To create a suite of tests that will allow mobile devices to be physically
      tested. This will include a robotic arm holding a stylus for touch events,
      as well as a rotate the device into different orientations.
      All this can be monitored remotely via a web service.</p>
    </div>
  </div>

</div>
