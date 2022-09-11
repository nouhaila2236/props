
const Profile = props =>{
    console.log(`props:`,props)
     return (
        <div>
        <div>{props.children}</div>
        <h1> Hi i'm {props.FullName}</h1>
        <p>{props.bio},and i am a {props.profession}</p>
        <button className="btn btn-primary" onClick={props.onClick}>Say hi! </button>
        </div>
     )
    }
export default Profile;
