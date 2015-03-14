<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();
		foreach(range(1, 20) as $index)
		{
			User::create([
				'name' => $faker->firstName . ' ' . $faker->lastName,
				'location' => $faker->country,
				'color' => $faker->safeColorName
			]);
		}
	}

}