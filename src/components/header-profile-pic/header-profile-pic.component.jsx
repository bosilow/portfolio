import "./header-profile-pic.styles.scss";

const HeaderProfilePic = ({ profileImg }) => (
  <div className="profile-img-container">
    <img src={profileImg} alt="Selfie" className="profile-img" />
  </div>
);

export default HeaderProfilePic;
