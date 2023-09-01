"use client";
import { useState, useEffect } from "react";
import Styles from "@/components/SelectGroup/SelectGroup.module.scss";
import { useRouter } from "next/navigation";
import axios from "../utilAxios";

type Group = {
  id: number;
  name: string;
  owner: number;
};

const SelectGroup: React.FC = () => {
  const router = useRouter();
  const [groupsData, setGroupsData] = useState<Group[]>([]);
  useEffect(() => {
    const getGroups = async () => {
      await axios
        .get("/api/v1/get_teams")
        .then((res: any) => {
          setGroupsData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getGroups();
  }, []);

  const onClick = (groupId: number) => {
    const params = new URLSearchParams([["groupId", groupId.toString()]]);
    router.push(`/lendManagement?${params.toString()}`);
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
    <div className={Styles.wrapper}>
      <span className={Styles.groupSelectTitle}>図書館選択</span>
      <div className={Styles.groupCard}>
        <ul className={Styles.groupList}>
          {groupsData.length > 0 ? (
            groupsData.map((group) => (
              <li
                className={Styles.groupListItem}
                key={group.id}
                onClick={() => onClick(group.id)}
              >
                <div className={Styles.circle}>{bookIcon}</div>
                <span className={Styles.groupListItemText}>{group.name}</span>
              </li>
            ))
          ) : (
            <li>データがありません</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SelectGroup;
