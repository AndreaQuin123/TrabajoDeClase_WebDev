import {Injectable, NotFoundException} from '@nestjs/common';
import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonService {
    pokemon: Pokemon[] = [];

    insertPokemon(name: string, type: string, hp: number): any {
        const newPokemon = new Pokemon(Math.random().toString(), name, type, hp);
        this.pokemon.push(newPokemon);
        return newPokemon;
    }

    getPokemon() {
        return [...this.pokemon]; //DECORADOR SPREAD, esto hace que mantiene la inmutabilidad del array original, osea manda una copia del array
    }

    getSinglePokemonId(pkmID: string) {
        const pkm = this.pokemon.find((pkm) => pkm.id === pkmID);
        
        if(!pkm){
            throw new NotFoundException('Could not find pokemon.');
        }

        return {...pkm}; 
    }

    getSinglePokemonName(pkmName: string) {
        const pkm = this.pokemon.find((pkm) => pkm.name === pkmName);
        
        if(!pkm){
            throw new NotFoundException('Could not find pokemon.');
        }

        return {...pkm}; 
    }

    UpdatePokemonById(id: string, name: string, type: string, hp: number) {
        const pokemon = this.getSinglePokemonId(id);
        const updatedPokemon = {...pokemon};

        if(name){
            updatedPokemon.name = name;
        }

        if(type){
            updatedPokemon.type = type;
        }

        if(hp){
            updatedPokemon.hp = hp;
        }
    }
}