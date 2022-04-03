import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { IGetCharacter } from "@world/types";

const characters$ = ajax<IGetCharacter>(
  `https://rickandmortyapi.com/api/character`
).pipe(
  map((req) => req.response.results),
  catchError((error) => {
    console.log("error: ", error);
    return of(error);
  })
);

export default characters$;
