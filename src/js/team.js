export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (!this.members.has(member)) {
      this.members.add(member);
    } else {
      throw new Error("Персонаж уже в команде!");
    }
  }

  addAll(...allMembers) {
    allMembers.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return [...this.members];
  }
}
