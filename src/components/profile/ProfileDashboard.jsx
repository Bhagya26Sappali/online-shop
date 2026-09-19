import React, { Fragment } from "react";
import Styles from "./_profile.module.css";
import { useAuth } from "../../hooks/fetchUser";
let courses = [
  {
    course_name: "reactjs",
    trainer: "shashi",
    duration: "1month",
    price: 10000,
    date: "10/5/2026",
  },
  {
    course_name: "spring",
    trainer: "dixit",
    duration: "1month",
    price: 10000,
    date: "11/5/2026",
  },
  {
    course_name: "Java",
    trainer: "Keshav",
    duration: "1month",
    price: 15000,
    date: "11/5/2026",
  },
];
const ProfileDashboard = () => {
  const { user } = useAuth();
  return (
    <section className={Styles.profileDashboard}>
      <article className={Styles.container}>
        {user === null ? (
          "Loading...."
        ) : (
          <>
            <aside className={Styles.sidebar}>
              <picture>
                <img
                  src="https://www.bing.com/th/id/OIP.sQVeiSmxnHk4RHwM6zAwzQHaJQ?w=193&h=241&c=
            8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="profile"
                  alter="avatar"
                />
              </picture>
              <figcaption>
                <h1>{user?.name}</h1>
              </figcaption>
            </aside>
            <aside className={Styles.content}>
              <main>
                <div class="head">
                  <strong>Email</strong>
                  <span>{user?.email}</span>
                </div>
                <div>
                  <strong>Role</strong>
                  <span>{user?.role}</span>
                </div>
                <div className={Styles.courses}>
                  {courses?.map((course) => {
                    return (
                      <main key={course?.course_name}>
                        <h1>{course.course_name}</h1>
                        <p>
                          <span>trainer</span> <span>{course?.trainer}</span>
                        </p>
                        <p>
                          <span>duration</span> <span>{course?.duration}</span>
                        </p>
                        <p>
                          <span>price</span> <span>{course?.price}</span>
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dignissimos dolorum optio vel necessitatibus id at accusamus? Labore, aut deserunt modi ipsam doloribus in eos id dolore iste maxime necessitatibus aspernatur non molestiae illum. Id facere, quidem modi odit obcaecati unde. Amet placeat non provident, assumenda ipsum libero nobis pariatur?</p>
                      </main>
                    );
                  })}
                </div>
              </main>
            </aside>
          </>
        )}
      </article>
    </section>
  );
};

export default ProfileDashboard;