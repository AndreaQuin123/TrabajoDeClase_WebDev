import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('Pokemon')
export class PokemonController {

    constructor(private readonly PokemonService: PokemonService){}

    @Post()
    addPokemon(@Body() completeBody: { name: string; type: string; hp: number }): any {
        const generatedPokemon = this.PokemonService.insertPokemon(completeBody.name, completeBody.type, completeBody.hp
        );
        return { id: generatedPokemon.id };
    }

    @Get('name/:name')
    getPokemonByName(@Param('name') pkmName: string): any {
        return this.PokemonService.getSinglePokemonName(pkmName);
    }

    @Get()
    getAllPokemon() {
        return this.PokemonService.getPokemon();
    }

    @Get(':id')
    getPokemonById(@Param('id') pkmID: string): any {
        return this.PokemonService.getSinglePokemonId(pkmID);
    }

    @Put(':id')
    updatePokemonByName(@Param('id') pkmID: string, @Body() completeBody: { name: string; type: string; hp: number } ): any {
        return this.PokemonService.UpdatePokemonById(pkmID, completeBody.name, completeBody.type, completeBody.hp);
    }
}