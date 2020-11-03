import { Artist } from './artist';
import { Copyright } from './copyright';
import { Track } from './track';

export class Result {

    artist: Artist;
    track: Track;
    copyright: Copyright;
    probability: number;
    similarity: number;

    constructor() {}

}