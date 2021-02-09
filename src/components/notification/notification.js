import React from "react";

export default function Notification() {
  return (
    <div>
      <div class="ui success message">
        <i class="close icon"></i>
        <div class="header">Your user registration was successful.</div>
        <p>You may now log-in with the username you have chosen</p>
      </div>
    </div>
  );
}
