const express = require('express');
const cors = require('cors');
const app = express();
const Joi = require('joi');
app.use(cors());
app.use(express.static("public"));
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/Weapons");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });

const strengthWeapons = [
    {
        "name": "Greatsword",
        "img": "images/Weapons/Greatsword.png",
        "description": "The Greatsword in Elden Ring is a massive, heavy weapon, dealing devastating damage with wide swings. When paired with the Lion’s Claw Ash of War, it becomes even more powerful, allowing for a fierce, leaping attack that crushes enemies with overwhelming force."
    },
    {
        "name": "Grafted Blade Greatsword",
        "img": "images/Weapons/Grafted.png",
        "description": "The Grafted Blade Greatsword is a colossal sword forged from countless smaller blades, symbolizing power through conquest."
    },
    {
        "name": "Prelate's Inferno Crozier",
        "img": "images/Weapons/Prelates.png",
        "description": "The Prelate's Inferno Crozier is a colossal, flame-scorched hammer, delivering devastating fiery blows."
    },
    {
        "name": "Greatsword Of Solitude",
        "img": "images/Weapons/Solitude.png",
        "description": "The Greatsword of Solitude is a massive, somber blade, dealing heavy, slow strikes."
    },
    {
        "name": "Rusted Anchor",
        "img": "images/Weapons/Anchor.png",
        "description": "The Rusted Anchor is a heavy weapon, delivering powerful, sweeping strikes."
    }
]

const dexterityWeapons = [
    {
        "name": "Uchigatana",
        "img": "images/Weapons/Uchigatana.png",
        "description": "The Uchigatana is a sleek katana, known for its quick strikes and impressive bleed buildup."
    },
    {
        "name": "Nagakiba",
        "img": "images/Weapons/Nagakiba.png",
        "description": "The Nagakiba is a long, elegant katana with extended reach."
    },
    {
        "name": "The Dancing Blade of Ranah",
        "img": "images/Weapons/Rahan.png",
        "description": "The Dancing Blade of Ranah is an elegant sword, delivering fluid, graceful attacks."
    },
    {
        "name": "Hand of Malenia",
        "img": "images/Weapons/HandMalenia.png",
        "description": "The Hand of Malenia is a graceful, curved blade designed for swift, precise attacks."
    },
    {
        "name": "Rivers of Blood",
        "img": "images/Weapons/Rivers.png",
        "description": "The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup."
    }
]

const mageWeapons = [
    {
        "name": "Dark Moon Greatsword",
        "img": "images/Weapons/DarkMoon.png",
        "description": "The Dark Moon Greatsword is a powerful, elegant weapon, known for its magical prowess."
    },
    {
        "name": "Fallingstar Beast Jaw",
        "img": "images/Weapons/FallingStar.png",
        "description": "The Fallingstar Beast Jaw is a massive, monstrous weapon crafted from the jaw of a fallen Star Beast."
    },
    {
        "name": "Azur's Glintstone Staff",
        "img": "images/Weapons/Azur_Staff.png",
        "description": "Azur's Glintstone Staff is a powerful catalyst, known for its high sorcery scaling."
    },
    {
        "name": "Rotten Crystal Sword",
        "img": "images/Weapons/RottenSword.png",
        "description": "The Rotten Crystal Sword is a unique weapon that combines beauty and decay."
    },
    {
        "name": "Scepter Of The All-Knowing",
        "img": "images/Weapons/AllKnowing.png",
        "description": "The Scepter of the All-Knowing is a powerful staff, embodying the essence of wisdom and arcane knowledge."
    }
]

const arcaneWeapons = [
    {
        "name": "Rivers Of Blood",
        "img": "images/Weapons/Rivers.png",
        "description": "The Rivers of Blood is a deadly katana, known for its exceptional bleed buildup."
    },
    {
        "name": "Serpent Bow",
        "img": "images/Weapons/SerpentBow.png",
        "description": "The Serpent Bow is a sleek, elegant bow, known for its rapid-fire capabilities."
    },
    {
        "name": "Morgott's Cursed Sword",
        "img": "images/Weapons/MorgotsSword.png",
        "description": "Morgott's Cursed Sword is a fearsome weapon, characterized by its imposing design."
    },
    {
        "name": "Mohgwyn's Sacred Spear",
        "img": "images/Weapons/Sacred_Spear.png",
        "description": "Mohgwyn's Sacred Spear is a powerful weapon, featuring a striking design that reflects its dark heritage."
    },
    {
        "name": "Bloody Helice",
        "img": "images/Weapons/Helice.png",
        "description": "Bloody Helice is a unique weapon, known for its swift, graceful attacks and distinctive design."
    }
]

const faithWeapons = [
    {
        "name": "Blasphemous Blade",
        "img": "images/Weapons/Blasphemous_Blade.png",
        "description": "Considered the best weapon in the entire game, the Blasphemous Blade is a powerful weapon with a striking design."
    },
    {
        "name": "Godslayer's Greatsword",
        "img": "images/Weapons/Godslayer_Greatsword.png",
        "description": "The Godslayer's Greatsword is an imposing weapon that exudes dark elegance."
    },
    {
        "name": "Winged Scythe",
        "img": "images/Weapons/Winged_Scythe.png",
        "description": "The Winged Scythe is a striking weapon with a unique design that combines elegance and lethality."
    },
    {
        "name": "Maliketh's Black Blade",
        "img": "images/Weapons/Maliketh_Black_Blade.png",
        "description": "Maliketh's Black Blade is a formidable weapon that embodies dark elegance and lethal precision."
    },
    {
        "name": "Sacred Relic Sword",
        "img": "images/Weapons/Sacred_Relic_Sword.png",
        "description": "The Sacred Relic Sword is a majestic weapon that exudes divine power."
    }
]

const strengthTalismans = [
    {
        "name": "Erdtree’s Favor",
        "img": "images/talismans/Erdtree_Favor.png",
        "description": "Erdtree’s Favor is not only favored by Bleed players in Elden Ring."
    },
    {
        "name": "Great-Jar’s Arsenal",
        "img": "images/talismans/Great-Jar_Arsenal.png",
        "description": "Equipment load is a crucial factor in building a strength character."
    },
    {
        "name": "Claw Talisman",
        "img": "images/talismans/Claw_Talisman.png",
        "description": "Using jump attacks with your strength weapon is the most effective way to maximize damage."
    }
]

const dexterityTalismans = [
    {
        "name": "Prosthesis-Wearer Heirloom",
        "img": "images/talismans/Prosthesis-Wearer_Heirloom.png",
        "description": "The Prosthesis-Wearer Heirloom is a valuable talisman in Elden Ring that enhances dexterity by 5 levels."
    },
    {
        "name": "Twinblade Talisman",
        "img": "images/talismans/Twinblade_Talisman.png",
        "description": "The Twinblade Talisman belongs to the same series as the Claw Talisman."
    },
    {
        "name": "Millicent's Prosthesis",
        "img": "images/talismans/Millicents_Prosthesis.png",
        "description": "Millicent's Prosthesis talisman offers an effect similar to the Rotten Winged Sword Insignia."
    }
]

const mageTalismans = [
    {
        "name": "Godfrey Icon",
        "img": "images/talismans/Godfrey_Icon.png",
        "description": "The Godfrey Icon talisman, featuring an emblem of Godfrey, boosts the power of charged spells."
    },
    {
        "name": "Magic Scorpion Charm",
        "img": "images/talismans/Magic_Scorpion_Charm.png",
        "description": "The Magic Scorpion Charm is part of a series of talismans that enhance damage for various elements."
    },
    {
        "name": "Primal Glintstone Blade",
        "img": "images/talismans/Primal_Glintstone_Blade.png",
        "description": "The Primal Glintstone Blade talisman enables players to cast spells more frequently."
    }
]

const arcaneTalismans = [
    {
        "name": "Lord of Blood’s Exultation",
        "img": "images/talismans/Lord_of_Blood_Exultation.png",
        "description": "Lord of Blood’s Exultation is a powerful talisman that boosts attack power by 20% when enemies are affected by blood loss."
    },
    {
        "name": "Shard of Alexander",
        "img": "images/talismans/Shard_of_Alexander.png",
        "description": "The Shard of Alexander enhances the power of your skills by 15%."
    },
    {
        "name": "Fire Scorpion Charm",
        "img": "images/talismans/Fire_Scorpion_Charm.png",
        "description": "The Fire Scorpion Charm boosts fire damage by 12%."
    }
]

const faithTalismans = [
    {
        "name": "Two Fingers Heirloom",
        "img": "images/talismans/Two_Fingers_Heirloom.png",
        "description": "The Two Fingers Heirloom talisman increases your faith by 5 levels."
    },
    {
        "name": "Marika's Soreseal",
        "img": "images/talismans/Marika_Soreseal.png",
        "description": "Marika's Soreseal enhances mind, intelligence, faith, and arcane by +5."
    },
    {
        "name": "Radagon's Soreseal",
        "img": "images/talismans/Radagon_Soreseal.png",
        "description": "Radagon's Soreseal boosts multiple stats by +5, though it increases damage taken by 15%."
    }
]

const strengthLocations =[
    {
        "name": "Greatsword",
        "img": "images/Weapons/Greatsword.png",
        "description": "Located inside a coffin carriage chest on the western side of the Caelid Region."
    },
    {
        "name": "Bullgoat Armor",
        "img": "images/Armor/bullgoat-set.png",
        "description": "Obtained after defeating the powerful Great Horned Tragoth in the Altus Plateau."
    },
    {
        "name": "Great-Jar’s Arsenal",
        "img": "images/talismans/Great-Jar_Arsenal.png",
        "description": "Obtained from the Great Jar in front of a colosseum in western Caelid's Dragonbarrow."
    }
]

const dexterityLocations =[
    {
        "name": "Rivers of Blood",
        "img": "images/Weapons/Rivers.png",
        "description": "Found exclusively in the hands of the invading NPC boss, Bloody Finger Okina."
    },
    {
        "name": "Hoslow's Set",
        "img": "images/Armor/hoslow-set.png",
        "description": "Dropped by Juno Hoslow, who is invaded after progressing through the Volcano Manor questline."
    },
    {
        "name": "Prosthesis-Wearer Heirloom",
        "img": "images/talismans/Prosthesis-Wearer_Heirloom.png",
        "description": "Obtained by completing Sage Gowry's questline in Caelid."
    }
]

const mageLocations =[
    {
        "name": "Azur's Glintstone Staff",
        "img": "images/Weapons/Azur_Staff.png",
        "description": "Located in the Academy of Raya Lucaria, on the second floor of the Church of the Cuckoo."
    },
    {
        "name": "Spellblade Set",
        "img": "images/Armor/spellblade-set.png",
        "description": "The set boosts sorcery, ideal for sorcerers, found in the Raya Lucaria Academy."
    },
    {
        "name": "Godfrey Icon",
        "img": "images/talismans/Godfrey_Icon.png",
        "description": "Obtained by defeating Godefroy the Grafted in the Golden Lineage Evergaol."
    }
]

const arcaneLocations =[
    {
        "name": "Mohgwyn's Sacred Spear",
        "img": "images/Weapons/Sacred_Spear.png",
        "description": "Exchanged from Finger Reader Enia for the Remembrance of the Blood Lord."
    },
    {
        "name": "War Surgeon Set",
        "img": "images/Armor/war_surgeon_set.png",
        "description": "Obtained by defeating the Nameless White Mask invaders in Mohgwyn Palace."
    },
    {
        "name": "Lord of Blood’s Exultation",
        "img": "images/talismans/Lord_of_Blood_Exultation.png",
        "description": "Acquired by defeating Esgar, Priest of Blood in the Leyndell Catacombs."
    }
]

const faithLocations =[
    {
        "name": "Blasphemous Blade",
        "img": "images/Weapons/Blasphemous_Blade.png",
        "description": "Exchanged with Finger Reader Enia after defeating the Shardbearer Boss, Rykard."
    },
    {
        "name": "Haligtree Knight Set",
        "img": "images/Armor/haligtree_knight_set.png",
        "description": "Located in the room above the Elphael Inner Wall grace site in the Haligtree."
    },
    {
        "name": "Radagon's Soreseal",
        "img": "images/talismans/Radagon_Soreseal.png",
        "description": "Found at Fort Faroth in Caelid's Dragonbarrow region."
    }
]

app.get('/api/Wepons/strengthWeapons', (req, res) => {
    res.json(strengthWeapons);
});

app.get('/api/Wepons/dexterityWeapons', (req, res) => {
    res.json(dexterityWeapons);
});

app.get('/api/Wepons/mageWeapons', (req, res) => {
    res.json(mageWeapons);
});

app.get('/api/Wepons/arcaneWeapons', (req, res) => {
    res.json(arcaneWeapons);
});

app.get('/api/Wepons/faithWeapons', (req, res) => {
    res.json(faithWeapons);
});

app.get('/api/talismans/strengthTalismans', (req, res) => {
    res.json(strengthTalismans);
});

app.get('/api/talismans/dexterityTalismans', (req, res) => {
    res.json(dexterityTalismans);
});

app.get('/api/talismans/mageTalismans', (req, res) => {
    res.json(mageTalismans);
});

app.get('/api/talismans/arcaneTalismans', (req, res) => {
    res.json(arcaneTalismans);
});

app.get('/api/talismans/faithTalismans', (req, res) => {
    res.json(faithTalismans);
});

app.get('/api/locations/strengthLocations', (req, res) => {
    res.json(strengthLocations);
});

app.get('/api/locations/dexterityLocations', (req, res) => {
    res.json(dexterityLocations);
});

app.get('/api/locations/mageLocations', (req, res) => {
    res.json(mageLocations);
});

app.get('/api/locations/arcaneLocations', (req, res) => {
    res.json(arcaneLocations);
});

app.get('/api/locations/faithLocations', (req, res) => {
    res.json(faithLocations);
});

app.get('/api/Weapons', (req, res) => {
    res.send(`<h1>Weapons</h1>
        <p>Strength Weapons: <a href="/api/Wepons/strengthWeapons">Strength Weapons</a></p>
        <p>Dexterity Weapons: <a href="/api/Wepons/dexterityWeapons">Dexterity Weapons</a></p>
        <p>Mage Weapons: <a href="/api/Wepons/mageWeapons">Mage Weapons</a></p>
        <p>Arcane Weapons: <a href="/api/Wepons/arcaneWeapons">Arcane Weapons</a></p>
        <p>Faith Weapons: <a href="/api/Wepons/faithWeapons">Faith Weapons</a></p>
        `);
});

app.get('/api/talismans', (req, res) => {
    res.send(`<h1>Talismans</h1>
        <p>Strength Talismans: <a href="/api/talismans/strengthTalismans">Strength Talismans</a></p>
        <p>Dexterity Talismans: <a href="/api/talismans/dexterityTalismans">Dexterity Talismans</a></p>
        <p>Mage Talismans: <a href="/api/talismans/mageTalismans">Mage Talismans</a></p>
        <p>Arcane Talismans: <a href="/api/talismans/arcaneTalismans">Arcane Talismans</a></p>
        <p>Faith Talismans: <a href="/api/talismans/faithTalismans">Faith Talismans</a></p>
        `);
});

app.get('/api/locations', (req, res) => {
    res.send(`<h1>Locations</h1>
        <p>Strength Locations: <a href="/api/locations/strengthLocations">Strength Locations</a></p>
        <p>Dexterity Locations: <a href="/api/locations/dexterityLocations">Dexterity Locations</a></p>
        <p>Mage Locations: <a href="/api/locations/mageLocations">Mage Locations</a></p>
        <p>Arcane Locations: <a href="/api/locations/arcaneLocations">Arcane Locations</a></p>
        <p>Faith Locations: <a href="/api/locations/faithLocations">Faith Locations</a></p>
        `);
});

const handleChange = (req, res) => {
    console.log("Handling the request");

    const results = validateItem(req.body);

    if (results.error) {
        res.status(400).send(results.error.details[0].message);
        console.log("I have an error")
        console.log(results.error);
        return false;
    }

    const item = {
        name: req.body.name,
        description: req.body.description
    };

    if (req.file){
        item.img = "images/Weapons/"+req.file.filename;
    }

    console.log(item);
    res.status(200).send(item);
    return true;
};

app.post('/api/Wepons/strengthWeapons', upload.single('img'), (req, res) => {
    if(handleChange(req, res)){
        strengthWeapons.push(req.body);
    }
});

const validateItem = (item) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        description: Joi.string().required()
    });

    return schema.validate(item);
}

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});