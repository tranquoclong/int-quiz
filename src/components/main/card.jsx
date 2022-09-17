import React from "react";

function card({ item }) {
  return (
    <div className="card">
      <div className="item">
        <div className="avatarImg">
          <img alt={item.avatarUrl?.title} src={item.avatarUrl?.url} />
        </div>
        <div className="advisor" style={{ justifyContent: "flex-end" }}>
          <div className="profile">
            <span className="name">{item.displayName}</span>
            <div>
              <span className="info">{item.email}</span>
              <span className="info">{item.phone}</span>
            </div>
            <div>
              {item.categoriesCollection.items.length > 0 &&
                item.categoriesCollection?.items.map((item, index) => (
                  <span className="categories" key={index}>
                    {item.displayName}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="skills">
          {item.skillsCollection?.items &&
            item.skillsCollection?.items.map((item, index) => (
              <span className="info" key={index}>
                {item.displayName}
              </span>
            ))}
        </div>
        <div
          className={item.status === "online" ? "statusGreen" : "statusRed"}
        ></div>
      </div>
    </div>
  );
}

export default card;
