import {Module} from '@nestjs/common';
import { PokemonController } from './pokemon.controllers';
import { PokemonService } from './pokemon.service';

@Module({
    controllers: [PokemonController],
    providers: [PokemonService]
})

export class PokemonModule {}