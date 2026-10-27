// ข้อมูลตั้งต้นของทะเบียน (แก้ไขผ่านหน้าเว็บได้ ค่าที่แก้จะบันทึกแยกไว้ในฐานข้อมูลของหน้า)
const A = id => "https://claude.ai/artifact/" + id;
window.SEED = [
  // ===== สุขภาพชุมชน =====
  {id:"klaibaan", name:"ใกล้บ้านใกล้ใจ", desc:"แพลตฟอร์มติดตามความเสี่ยงภาวะแทรกซ้อนผู้ป่วยโรคเรื้อรังร่วมกับ อสม.", cat:"health", year:"2569", status:"งานวิจัย",
   tech:"Flask, MySQL, Machine Learning (Random Forest, SVM, ANN), React (ต้นแบบหน้าจอ)", users:"ผู้ป่วยโรคเรื้อรัง, อสม.", related:"ดุษฎีนิพนธ์ นักศึกษาปริญญาเอก (ญาณภัทร) — หน่วยบริการสุขภาพชุมชน จ.สงขลา", link:"", icon:"🏡", color:4, badge:"HOT", shot:"", use:["รศ."]},
  {id:"bse-registry", name:"ระบบคัดกรองมะเร็งภัยเงียบ", desc:"ทะเบียนสตรี 20 ปีขึ้นไป บันทึกผลตรวจเต้านมรายเดือน และแดชบอร์ดติดตาม", cat:"health", year:"2569", status:"ต้นแบบ",
   tech:"HTML, CSS, JavaScript (ระยะที่ 1 เก็บข้อมูลใน Google Sheet)", users:"สตรีอายุ 20 ปีขึ้นไป ต.เขารูปช้าง, ชมรมถันยรักษ์ มรภ.สงขลา, เจ้าหน้าที่ รพ.สต.", related:"ทุนวิจัยภายในคณะวิทยาศาสตร์และเทคโนโลยี ปีงบประมาณ 2570", link:A("QLrZ1sbsedHHLskmbsBSyT"), icon:"🎗️", color:1, badge:"NEW", shot:"shots/bse-registry.jpg", use:["รศ."]},
  {id:"bse-app", name:"แอปคัดกรองมะเร็งภัยเงียบ", desc:"ประเมินความเสี่ยงมะเร็งเต้านม/ปากมดลูก และตรวจเต้านมด้วยตนเองทีละขั้น", cat:"health", year:"2569", status:"ต้นแบบ",
   tech:"HTML, CSS, JavaScript", users:"สตรีกลุ่มเป้าหมาย", related:"ทุนวิจัยภายในคณะวิทยาศาสตร์และเทคโนโลยี ปีงบประมาณ 2570", link:A("1ujf1UD5g3VV67VBGKt9Js"), icon:"💗", color:1, badge:"", shot:"shots/bse-app.jpg", use:[]},
  {id:"pneumonia", name:"รู้ทันปอดอักเสบ", desc:"ระบบติดตามผู้ป่วยและโปรแกรมส่งเสริมความรู้ป้องกันโรคปอดอักเสบ", cat:"health", year:"2569", status:"ต้นแบบ",
   tech:"HTML, CSS, JavaScript", users:"พยาบาลหอผู้ป่วยหญิง, ผู้ป่วยโรคปอดอักเสบ", related:"งานวิจัย R&D หอผู้ป่วยหญิง โรงพยาบาลไชยา จ.สุราษฎร์ธานี", link:A("A8FxzModvnGBw9h5RY3ZNX"), icon:"🫁", color:5, badge:"NEW", shot:"shots/pneumonia.jpg", use:[]},
  {id:"nurse-shift", name:"ระบบจัดเวรพยาบาล", desc:"จัดตารางเวรพยาบาลอัตโนมัติตามเงื่อนไขของหอผู้ป่วย", cat:"health", year:"2569", status:"ใช้งานจริง",
   tech:"Google OR-Tools (Constraint Solver), JavaScript, Excel", users:"พยาบาลหัวหน้าเวร / หอผู้ป่วย", related:"โรงพยาบาลไชยา จ.สุราษฎร์ธานี", link:"", icon:"🩺", color:6, badge:"", shot:"", use:[]},
  {id:"koyo", name:"ระบบวาระประชุมผ่าน LINE ชมรมผู้สูงอายุเกาะยอ", desc:"จัดการวาระและเอกสารการประชุมของชมรมผู้สูงอายุผ่าน LINE", cat:"health", year:"2569", status:"ออกแบบ",
   tech:"LINE (Messaging/LIFF), Google Sheets", users:"สมาชิกและคณะกรรมการชมรมผู้สูงอายุ ต.เกาะยอ", related:"ข้อเสนอโครงการวิจัย Seed Grant 2570 (ร่วมกับสาขาสาธารณสุข)", link:A("85igJY8cN9NxZLqBoxkqSa"), icon:"👵", color:3, badge:"", shot:"", use:[]},
  {id:"prawn", name:"ระบบธนาคารกุ้งก้ามกราม บ้านแหลมหาด", desc:"บริหารจัดการข้อมูลสมาชิก เรือประมง และธนาคารกุ้งของกลุ่มประมง", cat:"health", year:"2569", status:"ใช้งานจริง",
   tech:"AppSheet, HTML/CSS/JavaScript, Bootstrap, Google Sheets", users:"ผู้ดูแลระบบ, เจ้าหน้าที่, สมาชิกกลุ่มประมงบ้านแหลมหาด", related:"บทความวิจัยวารสาร JSID (TCI 2) — สาขาเทคโนโลยีสารสนเทศฯ มรภ.สงขลา", link:"", icon:"🦐", color:2, badge:"", shot:"", use:["รศ."]},

  // ===== สหกิจศึกษา =====
  {id:"seminar", name:"ระบบประเมินสัมมนาหลังสหกิจศึกษา", desc:"กรรมการให้คะแนนการนำเสนอออนไลน์ สรุปผลรายนักศึกษาและส่งออก Google Sheet", cat:"coop", year:"2569", status:"ใช้งานจริง",
   tech:"Google Apps Script, Google Sheets, HTML/CSS/JavaScript (HMAC-SHA256, CacheService)", users:"คณะกรรมการประเมิน 6 ท่าน, อาจารย์ประจำวิชา, นักศึกษาสหกิจ 13 คน", related:"รายวิชาสหกิจศึกษาทางวิทยาการคอมพิวเตอร์ 1 ภาค 1/2569 (6 พ.ย. 2569) — วางแผนต่อยอดงานวิจัย", link:A("RwD7ZY9gjNeSTqkrK2Jmfj"), icon:"🎤", color:0, badge:"HOT", shot:"", use:["ลิขสิทธิ์","ภาระงาน"]},
  {id:"coop-system", name:"ระบบบริหารจัดการสหกิจศึกษา (CIWI)", desc:"ติดตามนักศึกษาสหกิจตั้งแต่ก่อนออกฝึกจนสัมมนา บันทึกคะแนนตาม มคอ.4 และงานนิเทศ", cat:"coop", year:"2569", status:"กำลังพัฒนา",
   tech:"Google Apps Script, Google Sheets, HTML/CSS/JavaScript (responsive)", users:"นักศึกษาวิทยาการคอมพิวเตอร์, อาจารย์ประจำวิชา, อาจารย์นิเทศ", related:"CIWI Research — สาขาวิทยาการคอมพิวเตอร์ มรภ.สงขลา", link:"", icon:"🧭", color:7, badge:"NEW", shot:"", use:[]},
  {id:"coop-ml", name:"โมเดลทำนายความเหมาะสมสถานประกอบการสหกิจ", desc:"เปรียบเทียบ 4 อัลกอริทึมเพื่อสนับสนุนการจับคู่นักศึกษากับสถานประกอบการ", cat:"coop", year:"2569", status:"งานวิจัย",
   tech:"Python, Google Colab, Decision Tree, Random Forest, SVM, XGBoost", users:"ผู้ประสานงาน/อาจารย์สหกิจศึกษา", related:"CIWI Research — ข้อมูล T06/T07/T08 จาก coop.skru.ac.th (เป้าหมาย Scopus Q1–Q2)", link:"", icon:"📈", color:4, badge:"", shot:"", use:["รศ."]},

  // ===== การเรียนการสอน =====
  {id:"grade", name:"ระบบติดตามการส่งเกรด 1/2569", desc:"ติดตามสถานะการส่งเกรดรายวิชา แผนงานรายวัน และนับถอยหลัง", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript + การแจ้งเตือนตามกำหนดเวลา", users:"อาจารย์ผู้สอน", related:"ภาระงานสอน ภาคเรียนที่ 1/2569", link:A("94SMgiL4gpidW37JmvMyHN"), icon:"📋", color:2, badge:"NEW", shot:"shots/grade.jpg", use:[]},
  {id:"omr", name:"ตรวจข้อสอบ OMR", desc:"ถ่ายภาพหรืออัปโหลดกระดาษคำตอบ แล้วตรวจคะแนนอัตโนมัติ", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript (ประมวลผลภาพบนเบราว์เซอร์)", users:"อาจารย์ผู้สอน", related:"GESC401 การคิดในยุคดิจิทัล — Final 1/2569", link:A("PH1zRkj5aoCJuThztmd3E5"), icon:"🧾", color:6, badge:"HOT", shot:"shots/omr.jpg", use:[]},
  {id:"grade4613140", name:"ตรวจกระดาษคำตอบ 4613140", desc:"ตรวจกระดาษคำตอบ 40 ข้อจากไฟล์สแกน PDF แล้วส่งออกคะแนน", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript", users:"อาจารย์ผู้สอน", related:"รายวิชา 4613140 การวิเคราะห์และออกแบบระบบ", link:A("EUPQaCqxirukfUyfsm8kQh"), icon:"✅", color:5, badge:"", shot:"shots/grade4613140.jpg", use:[]},
  {id:"grade4613240", name:"ตรวจกระดาษคำตอบ 4613240", desc:"ใส่เฉลย รายชื่อนักศึกษา และไฟล์สแกน เพื่อตรวจคะแนนอัตโนมัติ", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript", users:"อาจารย์ผู้สอน", related:"รายวิชา 4613240 วิศวกรรมซอฟต์แวร์", link:A("E54JyizArNy2YSH6FqXwtR"), icon:"🖨️", color:3, badge:"", shot:"shots/grade4613240.jpg", use:[]},
  {id:"selab", name:"SE Delivery Lab", desc:"เว็บประกอบการสอนบทที่ 7–8 CI/CD และการบำรุงรักษาซอฟต์แวร์ พร้อมแบบฝึกหัด", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript", users:"นักศึกษารายวิชา 4613240", related:"รายวิชา 4613240 วิศวกรรมซอฟต์แวร์", link:A("Ffz6FYAu8Bn2aRwSS3YYgq"), icon:"🚀", color:2, badge:"", shot:"shots/selab.jpg", use:[]},
  {id:"sadstudio", name:"SAD Studio · มินิโปรเจกต์", desc:"แพลตฟอร์มทีมนักศึกษาแบบบริษัทจำลอง (PBL) ส่งและติดตามมินิโปรเจกต์", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"Next.js, Supabase, Google Login (@skru.ac.th) / ต้นแบบบน Claude", users:"นักศึกษารายวิชา 4613140, อาจารย์ผู้สอน", related:"งานวิจัยพัฒนาระบบ + การยอมรับเทคโนโลยี (UTAUT2)", link:A("5hYFnPUZ5mSMsJDnoqZGys"), icon:"🗂️", color:0, badge:"HOT", shot:"shots/sadstudio.jpg", use:["รศ."]},
  {id:"studio-proto", name:"Studio Prototype · โปรไฟล์ทีม", desc:"ต้นแบบหน้าโปรไฟล์ทีม ความคืบหน้า และความคิดเห็น", cat:"teach", year:"2569", status:"ต้นแบบ",
   tech:"HTML, CSS, JavaScript + ฐานข้อมูล", users:"นักศึกษา, อาจารย์ผู้สอน", related:"ต้นแบบของ SAD Studio", link:A("BTuHWoGAmUx6SSHHBcy9GS"), icon:"🎬", color:7, badge:"", shot:"shots/studio-proto.jpg", use:[]},
  {id:"fieldeval", name:"สมุดประเมินภาคสนาม", desc:"เพื่อนและอาจารย์ร่วมประเมินการนำเสนอมินิโปรเจกต์ภาคสนาม ดาวน์โหลด Excel/CSV", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript + ฐานข้อมูล", users:"นักศึกษา, อาจารย์ผู้สอน", related:"รายวิชาการวิเคราะห์และออกแบบระบบสารสนเทศ", link:A("BEY9FY7rxaieTgvKVVde4R"), icon:"📒", color:3, badge:"", shot:"shots/fieldeval.jpg", use:[]},
  {id:"quiz5", name:"แบบทดสอบท้ายบทที่ 5", desc:"แบบทดสอบออนไลน์จับเวลา การสืบค้นสารสนเทศ 20 ข้อ", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript", users:"นักศึกษา GESC401", related:"GESC401 การคิดในยุคดิจิทัล", link:A("8eWxPDSyqDTCMcDNvt9M9s"), icon:"📝", color:1, badge:"", shot:"shots/quiz5.jpg", use:[]},
  {id:"gesc-video", name:"ผลงานนักคิดยุคดิจิทัล", desc:"ระบบส่งลิงก์วีดีโอผลงานรายบท (บทที่ 4–8) ตรวจสถานะ และให้คะแนนพร้อมข้อเสนอแนะ", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"Google Apps Script, Google Sheets, HTML/CSS/JavaScript", users:"นักศึกษา GESC401 กลุ่ม 04 และ 06, อาจารย์ผู้สอน", related:"GESC401 การคิดในยุคดิจิทัล", link:"", icon:"🎞️", color:4, badge:"NEW", shot:"", use:[]},
  {id:"scam-buster", name:"Scam Buster: ภารกิจล่าภัยไซเบอร์", desc:"กิจกรรมในชั้นเรียนบทที่ 8 สุ่มสถานการณ์ภัยไซเบอร์ ให้นักศึกษาตอบผ่านมือถือ บันทึกคะแนนลงชีต", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"Google Apps Script, Google Sheets, HTML/CSS/JavaScript", users:"นักศึกษา GESC401, อาจารย์ผู้สอน", related:"GESC401 การคิดในยุคดิจิทัล บทที่ 8 การป้องกันตนเองในโลกดิจิทัล", link:"", icon:"🛡️", color:5, badge:"HOT", shot:"", use:[]},
  {id:"gform-quiz", name:"ตัวสร้างแบบทดสอบ Google Forms อัตโนมัติ", desc:"สคริปต์สร้างแบบทดสอบบทที่ 5 (30 ข้อ) พร้อมเฉลยและโหมดตรวจคะแนนอัตโนมัติ", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"Google Apps Script, Google Forms (Quiz mode)", users:"อาจารย์ผู้สอน, นักศึกษา GESC401", related:"GESC401 การคิดในยุคดิจิทัล บทที่ 5 การสืบค้นสารสนเทศ", link:"", icon:"🧩", color:3, badge:"", shot:"", use:[]},
  {id:"sportsci", name:"แผนโปรเจกต์จำลองบริษัท (วิทยาศาสตร์การกีฬา)", desc:"เว็บแนวทางจัดการเรียนการสอนแบบบริษัทจำลอง", cat:"teach", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS", users:"อาจารย์และนักศึกษา", related:"บริการวิชาการ / การบูรณาการการสอน", link:A("CvBoUDB1mhJMme8SxiyYuQ"), icon:"🏃", color:6, badge:"", shot:"shots/sportsci.jpg", use:[]},

  // ===== บริหารจัดการ =====
  {id:"workload", name:"สมุดภาระงานอาจารย์", desc:"บันทึกภาระงานตามแบบ ป-มร.สข.01 และส่งออกแบบฟอร์ม Word", cat:"admin", year:"2569", status:"ใช้งานจริง",
   tech:"HTML, CSS, JavaScript + ฐานข้อมูล", users:"อาจารย์คณะวิทยาศาสตร์และเทคโนโลยี", related:"การประเมินภาระงาน คณะวิทยาศาสตร์และเทคโนโลยี มรภ.สงขลา", link:A("Bp9d2wuXDFxePosUrmEgA2"), icon:"📚", color:4, badge:"", shot:"", use:[]},

  // ===== AI / ML =====
  {id:"crack", name:"แอปตรวจจับรอยร้าวคอนกรีต", desc:"จำแนกรอยร้าวคอนกรีตบนมือถือด้วยโมเดล MobileNet (ความแม่นยำ 95%)", cat:"ai", year:"", status:"งานวิจัย",
   tech:"Flutter, TensorFlow Lite, MobileNet / VGG16 / ResNet50", users:"วิศวกร/ผู้ตรวจสอบโครงสร้าง", related:"ดุษฎีนิพนธ์ มรภ.นครศรีธรรมราช — บทความ IJ-AI Vol.15 No.3 (2026)", link:"", icon:"🧱", color:5, badge:"", shot:"", use:[]},
  {id:"rubber", name:"โมเดล CNN จำแนกโรคใบยางพารา", desc:"จำแนกโรคใบยางพาราจากภาพด้วย Convolutional Neural Network", cat:"ai", year:"", status:"งานวิจัย",
   tech:"Python, CNN (Deep Learning)", users:"เกษตรกรชาวสวนยาง", related:"บทความส่งวารสาร Trends in Sciences", link:"", icon:"🌿", color:2, badge:"", shot:"", use:["รศ."]},
  {id:"pm25", name:"โมเดลพยากรณ์ PM2.5 หมอกควันข้ามแดน", desc:"พยากรณ์ฝุ่น PM2.5 จากหมอกควันอินโดนีเซียในสงขลา/หาดใหญ่", cat:"ai", year:"2569", status:"งานวิจัย",
   tech:"Python, Machine Learning, ข้อมูล Air4Thai", users:"หน่วยงานสิ่งแวดล้อม / ประชาชน", related:"บทความวารสารฟิสิกส์ (มรภ.สุราษฎร์ธานี)", link:"", icon:"🌫️", color:7, badge:"", shot:"", use:["รศ."]},

  // ===== ส่วนตัว / อื่น ๆ =====
  {id:"money", name:"บัญชีของฉัน", desc:"แอปบันทึกรายรับ-รายจ่าย ติดตั้งบนมือถือ ใช้งานออฟไลน์ได้", cat:"personal", year:"2569", status:"ใช้งานจริง",
   tech:"PWA (HTML, JavaScript, localStorage, Service Worker), GitHub Pages", users:"ส่วนตัว", related:"—", link:"https://sarapeech.github.io/my-money", icon:"💰", color:2, badge:"", shot:"", use:[]},
  {id:"snake", name:"งูกินผลไม้", desc:"เกมงูคลาสสิกสไตล์จอ LCD เล่นได้ทั้งคีย์บอร์ดและมือถือ", cat:"personal", year:"2569", status:"ใช้งานจริง",
   tech:"HTML Canvas, JavaScript", users:"ทั่วไป", related:"—", link:A("YDJekk64ZVsAEFhFVz2Kq4"), icon:"🐍", color:5, badge:"", shot:"shots/snake.jpg", use:[]}
];
