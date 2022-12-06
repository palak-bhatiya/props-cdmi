import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Service from './Service';
import './all.min.css';
var arr_obj = [
  { "content": "development courses", "button": "know more", "image": "https://cdn01.alison-static.net/courses/3757/alison_courseware_intro_3757.jpg", "icon":"★ ★ ★ ★ ★" },
  { "content": "design courses", "button": "know more", "image": "https://www.uniquedu.co.in/static/home_website_development.jpg", "icon":"★ ★ ★ ★ ★" },
  { "content": "programming IT", "button": "know more", "image": "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/139235190/original/16ab2c960c550b37f99a0efeb755beb1b58ced40/fix-bugs-develop-install-your-php-laravel-website.jpg", "icon":"★ ★ ★ ★ ★" },
  { "content": "trendy courses", "button": "know more", "image": "https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg", "icon":"★ ★ ★ ★ ★" },
  { "content": "civil Mech. Engineering", "button": "know more", "image": "https://gumlet.assettype.com/greaterkashmir%2F2022-04%2Fa7f32300-fc49-4468-82a3-6a24e371312e%2FEngineering_Mechanical_Engineering.jpg?auto=format%2Ccompress&fit=max&w=1200", "icon":"★ ★ ★ ★ ★" },
  { "content": "Business development", "button": "know more", "image": "https://thumbs.dreamstime.com/b/business-development-woman-using-smartphone-business-development-woman-using-her-smartphone-couch-128991705.jpg", "icon":"★ ★ ★ ★ ★" },
]
var service = [
  {"s_image":"https://5.imimg.com/data5/PM/DW/MY-15219773/information-technology-services-500x500.jpg", "s_heading":"Industry Experts As Trainers","s_content":"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."},
  {"s_image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTkRzDog-11TirWgSHdble1-RlnrGszwvISFfB57rZYieVIDa5P3PL8Djw_J882eLsZI&usqp=CAU", "s_heading":"Latest Curriculum","s_content":"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."},
  {"s_image":"https://www.viaconsulting.co/en/wp-content/uploads/2018/03/via-consulting_website_gorsel_770x480_teknoloji-770x430.png", "s_heading":"Latest Technology","s_content":"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."},
  {"s_image":"https://miro.medium.com/max/320/0*SD0IwR5moff9pz2z.jpg", "s_heading":"Interview Assistance","s_content":"At the end of each training,our training instructor will go through the possible technical questions you may be asked."},
  {"s_image":"https://st.depositphotos.com/1000423/1636/i/600/depositphotos_16363613-stock-photo-symbol-of-social-network.jpg", "s_heading":"Free Upgradation","s_content":"We will be provided free upgradation for any newer version of the course you have."},
  {"s_image":"https://5.imimg.com/data5/PM/DW/MY-15219773/information-technology-services-500x500.jpg", "s_heading":"Lifetime Support","s_content":"We will provide you lifetime support on all the courses you learned from us."},
]

function App() {
  return (
    <div className="App">
      {
        <div className="section">
          {
            arr_obj.map((item) => {
              return (
                <>
                  <Home content={item.content} button={item.button} image={item.image} icon={item.icon}/>
                </>
              )
            })
          }
        </div>
      }
      {
        <div className="main-section">
          {
            service.map((s_item) => {
              return(
                <>
                  <Service s_image={s_item.s_image} s_heading={s_item.s_heading} s_content={s_item.s_content}/>
                </>
              )
            })
          }
        </div>
      }
    </div>
  );
}

export default App;