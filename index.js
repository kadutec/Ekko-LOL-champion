const abilities = {
    "p" : ["ability_0245_P1", "PASSIVE", "Z-DRIVE RESONANCE", "Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion."],
    "q" : ["ability_0245_Q1", "Q", "TIMEWINDER", "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return."],
    "w" : ["ability_0245_W1", "W", "PARALLEL CONVERGENCE", "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time."],
    "e" : ["ability_0245_E1", "E", "PHASE DIVE", "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target."],
    "r" : ["ability_0245_R1", "R", "CHRONOBREAK", "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage."]
}

document.querySelectorAll(".ability-item").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".ability-item").forEach((ele) => {
            ele.classList.remove("active");
        })

        e.classList.add("active");

        document.getElementById("video").style = "opacity: 0";
        document.querySelector(".ability-info").style = "opacity: 1";

        setTimeout(() => {
            document.getElementById("video").src = "/videos/" + abilities[e.id][0] + ".webm";
            document.querySelector(".ability-info-type").innerHTML = abilities[e.id][1];
            document.querySelector(".ability-info-name").innerHTML = abilities[e.id][2];
            document.querySelector(".ability-info-desc").innerHTML = abilities[e.id][3];

            document.getElementById("video").style = "opacity: 1";
            document.querySelector(".ability-info").style = "opacity: 1";
        }, 250)
    })
})