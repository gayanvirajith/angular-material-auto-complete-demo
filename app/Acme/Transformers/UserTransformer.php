<?php

namespace Acme\Transformers;

/**
 * Class UserTransformer
 *
 * @package Acme\Transformers
 */

class UserTransformer extends Transformer {

    /**
     * Transform a user
     *
     * @param $user
     * @return mixed
     */
    public function transform($user)
    {
        return [
            'name'      => $user['name'],
            'color'      => $user['color'],
            'location'      => $user['location'],
        ];
    }
}