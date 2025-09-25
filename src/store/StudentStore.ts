import { makeAutoObservable } from "mobx";

class StudentStore {
  student = {
    firstName: "",
    lastName: "",
    class: "",
    rollNo: "",
    schoolName: "",
    section: "",
    otherInfo: ""
  };

  constructor() {
    makeAutoObservable(this);
  }

  setStudentField(field: keyof typeof this.student, value: string) {
    this.student[field] = value;
  }
}

const studentStore = new StudentStore();
export default studentStore;
