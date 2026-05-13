import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [ProductsModule, PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
