import { CardProps } from "@/types/ProjectType";

export const defaultCards: CardProps[] = [
  {
    imageSrc: "/Image/redbutton.jpg",
    imageLink: "https://korit-red-button-63s7.vercel.app/",
    title: "RedButton",
    description:
      "Next.js, TypeScript로 제작한 반응형 웹앱 보드게임 레드버튼 홈페이지 기반으로 API 연동 SpringBoot로 백엔드 구현 팀 프로젝트",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "SpringBoot",
      "API",
      "Swiper",
      "Motion",
      "React",
      "GitHub",
      "Vercel",
    ],
    links: [
      { label: "GO SITE", url: "https://korit-red-button-63s7.vercel.app/" },
      { label: "github", url: "https://github.com/hyunseo01/KORIT_RedButton" },
    ],
  },
  {
    imageSrc: "/Image/TodoList.png",
    imageLink: "https://blog-todo-list.vercel.app",
    title: "TodoList",
    description:
      "간단하고 직관적인 투두 리스트 웹 사이트 입니다. 할 일 추가, 완료, 삭제 기능을 구현 개인 프로젝트",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    links: [
      { label: "GO SITE", url: "https://blog-todo-list.vercel.app" },
      { label: "github", url: "https://github.com/janghyohwan/blog_TodoList" },
    ],
  },
  {
    imageSrc: "/Image/yanolja_air.jpg",
    imageLink: "https://janghyohwan.github.io/blog_yanolja/",
    title: "Yanolja Air",
    description:
      "실제 야놀자 항공권 예약 페이지를 기반으로, 검색 기능, 날짜 선택, 인원수, 가격 변경 기능을 구현한 팀 프로젝트.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
    links: [
      { label: "GO SITE", url: "https://janghyohwan.github.io/blog_yanolja/" },
      { label: "github", url: "https://github.com/janghyohwan/blog_yanolja" },
    ],
  },
  {
    imageSrc: "/Image/toss.jpeg",
    imageLink: "https://janghyohwan.github.io/toss/",
    title: "Toss",
    description:
      "Toss 홈페이지를 기반으로, GSAP과 Swiper를 활용해 스크롤 및 인터랙션 효과를 구현한 개인 프로젝트",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "Swiper",
      "GitHub",
    ],
    links: [
      { label: "GO SITE", url: "https://janghyohwan.github.io/toss/" },
      { label: "github", url: "https://github.com/janghyohwan/toss" },
    ],
  },
  {
    imageSrc: "/Image/oneroom.png",
    imageLink: "https://kcll0820.github.io/team_portfolio/",
    title: "원룸만들기",
    description:
      "원룸 만들기 모바일형 웹사이트 클론코딩 입니다. 사이드 바 ,카테고리 탭 기능 ,페이지 이동 기능 구현한 팀 프로젝트",
    tags: ["HTML", "CSS", "GitHub"],
    links: [
      { label: "GO SITE", url: "https://kcll0820.github.io/team_portfolio/" },
      { label: "github", url: "https://github.com/kcll0820/team_portfolio" },
    ],
  },

  {
    imageSrc: "/Image/Indigo.png",
    imageLink: "https://janghyohwan.github.io/publish_portfolio/",
    title: "Indigo",
    description:
      "자기소개 포트폴리오 페이지 입니다. HTML, CSS를 활용해 제작한 첫 개인 프로젝트",
    tags: ["HTML", "CSS", "GitHub"],
    links: [
      {
        label: "GO SITE",
        url: "https://janghyohwan.github.io/publish_portfolio/",
      },
      {
        label: "github",
        url: "https://github.com/janghyohwan/publish_portfolio",
      },
    ],
  },
];
