<?php

namespace App\Models;

use App\Traits\HasImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attraction extends Model
{
    use HasFactory;

    use HasImage;

    protected $guarded = ["id"];
    public $timestamps = false;

    protected $appends = ["cardPrice"];

    public function getCardPriceAttribute() {
        return $this->price - 10;
    }
}
