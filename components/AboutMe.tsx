import photo from "../src/assets/Hamzah.jpeg";

const AboutMe: React.FC = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={photo} alt="Hamzah Alsalmi" />
      <p>
        Hi, I'm Hamzah Alsalmi, a web developer passionate about creating
        dynamic and responsive web applications. While I’m new to web
        development, my excitement for learning and my problem-solving mindset
        drive me to explore new technologies like React, JavaScript, and
        TypeScript.
      </p>
      <p>
        My journey into web development started just recently, during this
        class, and since then, I've been fully immersed in building projects and
        gaining hands-on experience. I’ve developed a strong foundation in
        front-end development, and I’m excited to continue expanding my skills
        with more complex projects in the future.
      </p>
      <p>
        When I'm not coding, you'll probably find me playing soccer or
        practicing taekwondo. Both sports teach me discipline, focus, and
        teamwork—values that I also bring into my development work. Whether it's
        on the field or in the code editor, I enjoy the challenge of improving
        and growing.
      </p>
      <p>
        I'm currently focused on expanding my web development skills and looking
        for opportunities to grow as a developer. I’m always eager to take on
        new challenges and collaborate with others to build innovative,
        user-friendly applications.
      </p>
    </section>
  );
};
export default AboutMe;
