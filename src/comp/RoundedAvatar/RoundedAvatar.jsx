const RoundedAvatar = ({ url, isHidden}) => {
    
    return (
    <div>
        {
            isHidden === true ? (
            <h2>No avatar</h2>
            ) : (
                <img src={url} alt="avatar" />
            )
        }
    </div>
  );
};

export default RoundedAvatar;
