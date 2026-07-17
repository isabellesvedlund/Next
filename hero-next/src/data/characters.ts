export interface CharacterLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export async function getCharacters(
  page = 1,
  name = "",
): Promise<CharacterResponse> {
  const url = new URL("https://rickandmortyapi.com/api/character");

  url.searchParams.append("page", String(page));

  if (name !== "") {
    url.searchParams.append("name", name);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch characters: ${response.status}`);
  }

  return response.json();
}

export async function getCharacterById(id: number): Promise<Character> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch character: ${response.status}`);
  }

  return response.json();
}
