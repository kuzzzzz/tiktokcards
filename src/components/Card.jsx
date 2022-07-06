import React from 'react'
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="card">
        <div>
          <img
            className="avatar"
            src={profile.avatarThumb}
            alt={profile.nickname}
          />
        </div>
        <div className="user-info">
          <h2>{profile.nickname}</h2>
          <h3>@{profile.uniqueId}</h3>

          <p>{profile.signature}</p>

          <ul className="info">
            <li>
              {profile.followerCount}
              <strong>Followers</strong>
            </li>
            <li>
              {profile.followingCount}
              <strong>Following</strong>
            </li>
            <li>
              {profile.heart}
              <strong>Likes</strong>
            </li>
          </ul>
          <a
            className="repo"
            href={`https://www.tiktok.com/@${profile.uniqueId}`}
          >
            Videos {profile.videoCount}{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Card