import React from "react";
 import { Link } from "react-router-dom";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickHandler, handleDelete }) {
    return (
      <div className="ui column">
        <div className="ui card" key={bot.id} onClick={() => clickHandler(bot)}>
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name}
              <i className={botTypeClasses[bot.bot_class]} />
            </div>
            <div className="meta text-wrap">
              <small>{bot.catchphrase.substring(0, 32)}</small>
            </div>
          </div>
          