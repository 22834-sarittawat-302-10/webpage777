// ปิดหน้า Preloader เมื่อโหลดเสร็จ (2 วินาที)
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }
    }, 2000);
});

// สร้างประกายไฟเมื่อขยับเมาส์ (Cursor Trail)
document.addEventListener('mousemove', function(e) {
    let spark = document.createElement('div');
    spark.style.position = 'absolute';
    spark.style.width = '6px';
    spark.style.height = '6px';
    spark.style.background = '#ff8c00'; // สีส้มไฟ
    spark.style.borderRadius = '50%';
    spark.style.boxShadow = '0 0 10px #ff4500';
    spark.style.pointerEvents = 'none';
    spark.style.left = (e.pageX - 3) + 'px';
    spark.style.top = (e.pageY - 3) + 'px';
    spark.style.zIndex = '9999';
    
    document.body.appendChild(spark);
    
    // อนิเมชันจางหายและตกลงมา
    setTimeout(() => {
        spark.style.transition = 'all 0.5s ease-out';
        spark.style.transform = 'translateY(20px) scale(0)';
        spark.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        spark.remove();
    }, 500);
});

// เอฟเฟกต์แมกม่าระเบิดเมื่อคลิก
document.addEventListener('click', function(e) {
    let explosion = document.createElement('div');
    explosion.style.position = 'absolute';
    explosion.style.width = '20px';
    explosion.style.height = '20px';
    explosion.style.background = 'radial-gradient(circle, #fff 0%, #ff4500 50%, transparent 100%)';
    explosion.style.borderRadius = '50%';
    explosion.style.pointerEvents = 'none';
    explosion.style.left = (e.pageX - 10) + 'px';
    explosion.style.top = (e.pageY - 10) + 'px';
    explosion.style.zIndex = '9998';
    
    document.body.appendChild(explosion);
    
    // อนิเมชันขยายตัวแบบระเบิด
    setTimeout(() => {
        explosion.style.transition = 'all 0.4s ease-out';
        explosion.style.transform = 'scale(5)';
        explosion.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        explosion.remove();
    }, 400);
});
