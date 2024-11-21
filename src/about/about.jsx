import React from "react";
import AboutImg from "../assets/AboutMe.png";

export default function About() {
  return (
    <div className="mt-10 sm:px-4 md:px-14 lg:px-20 text-slate-50 dark:text-gray-950 py-20 font-Farro" >

      <div className=" px-4 py-5 font-Farro text-4xl font-bold">
        About Me
      </div>

      <div className="container">
        <div className="grid grid-row-1 lg:grid-flow-col  gap-2">

            <div className="text-black sm-col-span-full md:col-span-4 lg:col-span-4  dark:text-red-500 center inline-flex justify-center middle block">
              <img src={AboutImg} alt="" className="middle center" />
            </div>

            <div className="sm-col-span-full md:col-span-8 lg:col-span-8  grid gap-6">
                <div>Hey there!</div>

                <div>
              I'm Suresh Kumar R, and as you might have already read,
              I'm a designer, developer, photographer and a writer. This website
              was made to showcase all of what I can do and plan to do. Don't
              judge my writing based on this section though, this is by far my
              shoddiest work yet. 
                </div>

                <div>
              I got into design because I consider myself a
              pseudo-perfectionist, if that's even a word? As in, I hate to see
              things 'not look good'. So I set out on a journey to make products
              that people use that 'look great', and I'm forever on that path. 
                </div>

                <div>
              I got into development because computers have always fascinated
              me.int i = 10; creates an integer of value 10? LIKE, WOW! But
              seriously, just seeing code getting converted to things we use
              regularly, like Facebook or Amazon, was no less than magic to me
              and that's where my quest to invent began. 
                </div>

                <div>
                I got into photography
              for a very philosophical reason and a very weird one at that. To
              me, photography is no less than time-travel. When I look at a
              photo, I am instantly transported to that moment in time when I
              shot it, that memory takes over. It's a beautiful art form to
              express creativity as well, and it's been a passion of mine since
              my childhood.
                </div>

                <div>
                I created this website so I could showcase all this
              and through this process, make it easier for you to connect with
              me. If you like what you see, head over to the contact section
              below and send me a text. I would love to hear from you!
                </div>  
            
            </div>
        </div>
      </div>

    </div>
  );
}
