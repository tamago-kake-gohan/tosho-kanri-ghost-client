"use client";
import { useState } from "react";
import "./SelectGroup.css";

interface Group {
  id: number;
  name: string;
}

const SelectGroup: React.FC = () => {
  const groups: Group[] = [
    {
      id: 1,
      name: "Group 1",
    },
    {
      id: 2,
      name: "Group 2",
    },
    {
      id: 3,
      name: "Group 3",
    },
  ];

  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const handleMouseHover = (groupId: number) => {
    setSelectedGroup(groupId);
  };

  const bookIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      color="white"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
      />
    </svg>
  );

  return (
    <div>
      <span className="group-select-title">グループ選択</span>
      <div className="group-card">
        <ul className="group-list">
          {groups.map((group) => (
            <li
              className={`group-list-item ${selectedGroup === group.id ? "selected" : ""
                }`}
              key={group.id}
              onMouseEnter={() => handleMouseHover(group.id)}
            >
              <div className="circle">{bookIcon}</div>
              <span className="group-list-item-text">{group.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectGroup;
