import Image from "next/legacy/image";
import React from "react";
import pokemonImg from "../../public/projects/pokemon.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

//why you enjoy doing it
//why you chose that project
//what you learnt in that project
//any obstacles you had to overcome (programming wise)

export default function PokemonPage() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pokemonImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Pokemon Finder</h2>
          <h3>NextJS / GraphQL / TypeScript / ChakraUI / Vercel</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using NextJS using getServerSideProps concept and
            is hosted on Vercel. Users are able to find information on pokemons
            based on their name to retrieve list of the pokemon type and moves.
            More features such as search bar, pokemon gallery and homepage will
            be added soon or are under development.
          </p>

          <Link href={"https://nextjs-pokemon-9tcnz8br2-farah415.vercel.app"}>
            <button className="px-8 py-2 mt-4 mr-8 bg-pink-300 ">Demo</button>
          </Link>
          <Link
            href={
              "https://github.com/faabaf01/nextjs-pokemon-getserversideprops"
            }
          >
            <button className="px-8 py-2 mt-4 bg-pink-300">Code</button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ChakraUI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                GraphQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="cursor-pointer mt-10 p-16 py-3">Go back</button>
        </Link>
      </div>
    </div>
  );
}
