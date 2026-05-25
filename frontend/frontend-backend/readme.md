การทำงาน ให้เรียกที่ proxy frontend-backend
ถ้าใช้โครงสร้างของคุณแล้ว ให้คนอื่นเรียก:

http://localhost:4000/api/v1/members/038036/full
เพราะ frontend-backend จะเป็นตัวกลางไปเรียก backend จริงให้ พร้อมส่ง x-api-key ให้เอง