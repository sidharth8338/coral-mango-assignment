import React from "react";

export default function CommonFunctionalityComponent({
  filter,
  setFilter,
  sort,
  setSort,
  setUserList,
  userList,
}) {
  return (
    <div>
      <input
        placeholder={"Filter User"}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          marginBottom: 20,
        }}
      />
      {filter ? (
        <p className="banner">You are seeing the filtered results!</p>
      ) : (
        ""
      )}
      <label htmlFor="user-sel">Sort User By</label>
      <select
        value={sort}
        id="user-sel"
        onChange={(e) => {
          setSort(e.target.value);
          if (e.target.value === "age") {
            setUserList(userList.sort((a, b) => a.age - b.age));
          } else {
            setUserList(
              userList.sort((a, b) =>
                a[e.target.value].localeCompare(b[e.target.value])
              )
            );
          }
        }}
      >
        <option value={""}>--select--</option>
        <option value={"name"}>Name</option>
        <option value={"age"}>Age</option>
        <option value={"occupation"}>Occupation</option>
      </select>
    </div>
  );
}
