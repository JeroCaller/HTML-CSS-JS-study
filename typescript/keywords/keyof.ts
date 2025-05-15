interface ProjectInfo {
  name: string;
  duringInMonth: number;
  skills: string[];
}

type ProjectInfoUnion = keyof ProjectInfo;  // "name" | "duringInMonth" | "skills"

let nameVar: ProjectInfoUnion = "name";
let duringVar: ProjectInfoUnion = "duringInMonth";
let skillsVar: ProjectInfoUnion = "skills";

// ==== keyof + typeof 응용

const plainObj = {
  id: 1,
  auth: 'OAuth2.0',
  db: 'MariaDB'
};

type ProjectSkill = keyof typeof plainObj;  // "id" | "auth" | "db"
let idVar: ProjectSkill = "id";
let authVar: ProjectSkill = "auth";
let db: ProjectSkill = "db";
