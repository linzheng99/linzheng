"use client";

import Image from "next/image";
import Link from "next/link";

import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

import { socialLinks, userInfo } from "../info";

export default function UserCard() {
  const { name, avatar, description } = userInfo;
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-white/15 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col items-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white text-center"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300 text-center"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full flex justify-center items-center mt-4">
          <div className="w-[280px] h-[280px] relative">
            <Image
              src={avatar}
              fill
              className="object-cover rounded-full group-hover/card:shadow-xl"
              alt="avatar"
            />
          </div>
        </CardItem>
        <div className="flex mt-4 items-center">
          {socialLinks.map(({ icon: Icon, url }) => (
            <CardItem
              key={url}
              translateZ={20}
              as={Link}
              href={url}
              target="__blank"
              className="flex items-center gap-2 text-neutral-300 cursor-pointer hover:underline hover:text-white"
            >
              <Icon className="size-4" /> {url}
            </CardItem>
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
}
