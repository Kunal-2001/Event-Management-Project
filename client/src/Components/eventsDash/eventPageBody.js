import React from "react";
import EventCard from "./eventCard";
import "./eventPageBody.css";
export default function eventPageBody() {
  return (
    <div className="eventCards">
      <EventCard image="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg" />
      <EventCard image="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/star-is-born-web.jpg" />
      <EventCard image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F85843835%2F223049348999%2F1%2Foriginal.20191231-032051?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=2411980f92c71fb481b2f94d9e34f9d5" />
      <EventCard image="https://cdn-az.allevents.in/events3/banners/fb1e8ddcb812d75b1c338448a45dcf0fc73c61ffb8ddcc984c241356be394dc8-rimg-w1200-h1553-gmir.jpg?v=1617403235" />
      <EventCard image="https://i.pinimg.com/474x/9f/2d/05/9f2d05c590c49ec1580c327754c50d34.jpg" />
    </div>
  );
}
