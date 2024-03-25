import Team from "../app";

test("add", () => {
  const team = new Team();
  team.add("tank");
  team.add("heal");
  expect([...team.members]).toEqual(["tank", "heal"]);
});

test("toArray", () => {
  const team = new Team();
  team.add("tank");
  team.add("heal");
  expect(team.toArray()).toEqual(["tank", "heal"]);
});

test("addAll", () => {
  const team = new Team();
  team.addAll("tank", "heal", "dd");
  expect(team.toArray()).toEqual(["tank", "heal", "dd"]);
});

test("Error", () => {
  const team = new Team();
  team.add("tank");
  team.add("heal");
  expect(() => {
    team.add("tank");
  }).toThrowError("Персонаж уже в команде!");
});
