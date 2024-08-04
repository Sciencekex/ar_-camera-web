function setupCamera(videoElement, canvasElement) {
    const ctx = canvasElement.getContext('2d');
    videoElement.width = canvasElement.width = window.innerWidth;
    videoElement.height = canvasElement.height = window.innerHeight;

    const constraints = {
        video: {
            width: window.innerWidth,
            height: window.innerHeight,
            facingMode: "environment" // 请求后置摄像头
        }
    };

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        videoElement.srcObject = stream;
        videoElement.onloadedmetadata = () => videoElement.play();
    }).catch(error => {
        console.error('摄像头访问失败:', error);
    });
}

const video1 = document.getElementById('video1');
const canvas1 = document.getElementById('canvas1');
setupCamera(video1, canvas1);

const video2 = document.getElementById('video2');
const canvas2 = document.getElementById('canvas2');
setupCamera(video2, canvas2);