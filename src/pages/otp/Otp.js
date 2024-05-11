import React , {useState} from 'react'
import Footer from '../../components/footer/Footer'
import { axiosClient } from '../../utils/axiosClient';
import { toast} from 'react-hot-toast';
import { Link , useNavigate } from 'react-router-dom';
import "./Otp.scss";

function Otp() {
    const[otp , setotp] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        try{
            e.preventDefault();
            const result = await axiosClient.post("/auth/sendemail" , {
                otp
            });
            
            toast(
                "Account Created Successfully. Login with your credentials",
                {
                  duration: 8000,
                  icon: '🙏',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  }
                }
              );
            navigate('/login');
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div className="otpverification">
        <div className="otp-verification">
            <h2 className="heading">Enter OTP</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="enterOTP"
                    id="enterOTP"
                    placeholder="Don't forget to check your spam folder"
                    onChange={(e) => setotp(e.target.value)}
                />
                <input type='submit' className="submit" />
                {/* <label htmlFor="enterOTP">Don't forget to check your spam folder</label> */}
            </form>
            <p className="subheading">
                    Entered wrong email? <Link to="/signup">Signup</Link>
            </p>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Otp