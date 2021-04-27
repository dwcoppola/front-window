// SETUP (initilize local sotrage if it doesn't exist)

function setupTrays() {
    if (localStorage['tray'] === undefined) {
        localStorage['tray'] = [
            572,230.25,571,157.85,570,88.75,569,210.1,568,233.8,567,216.95,566,220.25,565,154,
            564,215.05,563,227.05,562,217.3,561,228.4,560,214.9,559,211.4,558,218.3,557,215.3,
            556,217.6,555,210.4,554,94.7,553,93.5,552,92.1,551,102.15,550,102.4,549,104,548,
            95.7,547,210.1,546,222.1,545,16.55,544,15.95,543,17.45,542,16.9,541,16.35,540,
            15.95,539,16.4,538,40,537,40.45,536,168.95,535,17.25,534,220.9,533,40.05,532,38.9,
            531,16.3,530,39.25,529,16.3,528,16.3,527,16.3,526,37.9,525,39.3,524,39.4,523,41.2,
            522,216.2,521,217.9,520,91.2,519,88.15,518,99.75,517,214.1,516,232,515,149.6,514,
            67.35,513,67.9,512,68.1,511,95.65,510,95.8,509,228.4,508,209.05,507,150.15,506,
            221.2,505,26.9,504,16.5,503,67.5,502,39.3,501,224.8,500,40.25,499,41.4,498,39.55,
            497,39.4,496,40.2,495,38.1,494,224.6,493,211.5,492,161.1,491,220.25,490,94.35,489,
            91,488,211.2,487,26.85,486,155.4,485,40.55,484,70.85,483,26.85,482,17.9,481,41.7,
            480,15.95,479,103.15,478,229.2,477,232.8,476,98.4,475,72.05,474,76.4,473,77.4,472,
            78.4,471,79.95,470,78.5,469,79.15,468,77.05,467,79.45,466,36.05,465,40.4,464,34.9,
            463,31.55,462,35.85,461,16.3,460,16.65,459,31.9,458,16.2,457,39.2,456,39.45,455,
            38.45,454,39.75,453,26.7,452,16.1,451,231.6,450,154.85,449,32.45,448,31.6,447,
            16.3,446,92.85,445,26.6,444,77.35,443,26.65,442,151.55,441,104.25,440,104.1,439,
            102.3,438,101.85,437,105.2,436,100.2,435,104.3,434,104.15,433,103.9,432,100.1,431,
            26.6,430,26.45,429,26.8,428,26.55,427,162.05,426,216.85,425,157.4,424,227.05,423,
            132.6,422,207.5,421,39.95,420,230.55,419,38.9,418,40.8,417,41.7,416,40.55,415,
            40.45,414,41,413,6.75,412,208.3,411,26.55,410,26.95,409,26.7,408,26.55,407,26.5,
            406,26.65,405,26.55,404,26.45,403,26.7,402,95.7,401,160.55,400,39.85,399,247.6,
            398,220.4,397,223.9,396,209.5,395,229.1,394,16.2,393,15.65,392,242.15,391,16.15,
            390,15.9,389,93.7,388,99.4,387,71.15,386,70.95,385,228.9,384,225.7,383,225.5,382,
            71.35,381,105.15,380,238.5,379,235.75,378,70.65,377,71.05,376,70.95,375,70.9,374,
            70.55,373,70.9,372,66.6,371,66.25,370,65.95,369,235,368,241.85,367,239.4,366,243.1,
            365,175.9,364,200.4,363,243.05,362,236.85,361,239.85,360,88.85,359,240.9,358,245.2,
            357,17.25,356,16.85,355,15.45,354,17.15,353,15.8,352,231.7,351,238.15,350,213.25,
            349,218.9,348,209.45,347,221.2,346,247.85,345,205.15,344,231.1,343,223,342,38.7,
            341,238.75,340,105.65,339,70.6,338,15.25,337,245.8,336,105.3,335,105,334,97.4,333,
            98.5,332,108.75,331,102.9,330,219.1,329,239.9,328,233.6,327,216.5,326,16.9,325,
            219.9,324,38.75,323,38.3,322,41.2,321,39.3,320,38.75,319,16.5,318,17.6,317,16.9,
            316,16.4,315,16.35,314,17.3,313,16.4,312,17.15,311,16.55,310,17.45,309,16.45,308,
            16.3,307,16.45,306,17,305,16.65,304,16.9,303,16.8,302,16.25,301,16.65,300,17,299,
            17.15,298,16.1,297,71.95,296,71.05,295,71.6,294,70.85,293,70.65,292,71.15,291,70.2,
            290,71.4,289,71.35,288,71.9,287,71.55,286,70.75,285,71.85,284,71.95,283,67.45,282,
            66.1,281,71.75,280,72,279,71.85,278,71.1,277,71.65,276,71.6,275,71.6,274,67.3,273,
            67.65,272,67.15,271,67.95,270,67.65,269,67.75,268,72.2,267,71.2,266,71.95,265,71.05,
            264,70.75,263,70.9,262,70.95,261,71.35,260,70.35,259,71.8,258,70.85,257,71.2,256,
            70.95,255,70.5,254,70.95,253,70.55,252,70.9,251,71.1,250,71.15,249,71.35,248,71.35,
            247,71.2,246,71,245,70.55,244,71.1,243,70.7,242,157,241,174.3,240,234.55,239,210.75,
            238,244.85,237,245.95,236,231.35,235,242.3,234,244.3,233,234.85,232,239.3,231,243.2,
            230,173.3,229,225.8,228,212.2,227,207.2,226,215.85,225,207.3,224,229.85,223,233.55,
            222,205.45,221,244.15,220,243.75,219,236.95,218,235.3,217,231.4,216,236.3,215,247.45,
            214,232.85,213,240.3,212,235.05,211,229.2,210,236.2,209,231.55,208,232.35,207,234.65,
            206,238.9,205,242.6,204,219.4,203,240.2,202,155.55,201,212.9,200,175.1,0,0,"",
        ];
    }
}

function setupRingSizes() {
    if (localStorage['ring-size'] === undefined) {
        localStorage['ring-size'] = [
            4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.15,
            13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, ""
        ];
    }
}

function setupCostCodes() {
    if (localStorage['cost-code'] === undefined) {
        localStorage['cost-code'] = [
            "T-214","GPELDHOOP","T-215","GPEMDHOOP",
            "T-231","GPELDHOOP","T-232","GPEMDHOOP",
            "T-263","R1R1D","T-264","RPR1RDHOOP",
            "T-266","RPR3R1D","T-280","GPELDHOOP",
            "T-281","GPEMDHOOP","T-282","GPE92","T-290",
            "PTPN102","T-305","R1R1D","T-306",
            "RPR1RDHOOP","T-309","RPR3R1D","T-310",
            "Y1R1D","T-311","GPB3R","T-313",
            "GPB5R2.7","T-315","YPR5R1D","T-317",
            "YPR3RDHOOP","T-320","GPE91","T-321",
            "GPELDHOOP","T-322","GPEMDHOOP","T-324",
            "GPN103","T-326","PT1R1D","T-327",
            "PTPB1RDHOOPS","T-328","PTPR3RDHOOP",
            "T-329","PTPB1RDHOOP060S","T-330","PTPR1RDHOOP",
            "T-331","PTPB1RDHOOP","T-332","PTPB1RDHOOP060",
            "T-336","SPELHEART","T-343","SPE92",
            "T-344","SPN103","T-349","SPN100",
            "T-350","R1R1D","T-351","RPR1RDHOOP",
            "T-354","RPR5R","T-356","Y1R1D",
            "T-357","GPB3R","T-358","YPR3R1D",
            "T-359","YPR5R1D","T-360","GPR5R",
            "T-361","GPB9R","T-362","YPR3RDHOOP",
            "T-363","YPR1RDHOOP","T-364","YPB1RDHOOP060S",
            "T-365","GPN102","T-366","GPE91",
            "T-367","GPELHEART","T-368","GPELDHOOP",
            "T-369","GPEMDHOOP","T-371","GPNWAVE",
            "T-373","PT1R1D","T-374","PTPB1RDHOOPS",
            "T-375","PTPB1RDHOOP","T-376","PTPB1RDHOOP060S",
            "T-377","PTPR3RDHOOP","T-378","PTPR1RDHOOP",
            "T-379","SPB3R","T-381","SPB5R",
            "T-384","SPELHEART","T-386","SPN102",
            "T-388","SPEMDHOOP","T-389","SPE92",
            "T-390","SPESHEART","T-391","SPN103",
            "T-392","SPESWAVE","T-396","SPR5R",
            "T-397","R1R1D","T-398","RPR1RDHOOP",
            "T-399","RPR3RDHOOP","T-400","RPB1RDHOOPS",
            "T-401","RPEMDHOOP","T-402","RPR5R",
            "T-403","RPDNWAVE","T-404","Y1R1D",
            "T-405","GPB3R","T-406","YPR3R1D",
            "T-407","YPR5R1D","T-408","GPR5R",
            "T-409","GPB9R","T-410","YPR3RDHOOP",
            "T-411","YPR1RDHOOP","T-412","YPB1RDHOOPS",
            "T-413","YPB1RDHOOP060","T-414","GPN102",
            "T-415","GPE91","T-416","GPELDHOOP",
            "T-417","GPEMDHOOP","T-419","GPN103",
            "T-420","GPDNWAVE","T-421","GPB3RDHOOP",
            "T-422","PT1R1D","T-423","PTPB1RDHOOPS",
            "T-424","PTPB1RDHOOP060S","T-425","PTPB1RDHOOP",
            "T-426","PTPR3RDHOOP","T-427","PTPR1RDHOOP",
            "T-429","SPB3R","T-431","SPB5R2.7",
            "T-432","SPB5R","T-433","SPESHEART",
            "T-434","SPEMHEART","T-435","SPELHEART",
            "T-436","SPEMDHOOP","T-437","SPELDHOOP",
            "T-439","SPN102","T-440","SPE92",
            "T-441","SPN103","T-442","SPESWAVE",
            "T-443","SSPR3R1AQ","T-446","SPR5R",
            "T-447","R1R1D","T-448","RPR1RDHOOP",
            "T-449","RPR3RDHOOP","T-450","RPB1RDHOOPS",
            "T-451","RPR3R1D","T-452","RPR5R",
            "T-453","Y1R1D","T-454","GPB3R",
            "T-455","YPR3R1D","T-456","GPB5R2.7",
            "T-457","GPB5R","T-458","YPR5R1D",
            "T-459","GPR5R","T-460","GPB9R",
            "T-461","YPR3RDHOOP","T-462","YPR1RDHOOP",
            "T-463","YPB1RDHOOP","T-464","YPB1RDHOOPS",
            "T-465","YPB1RDHOOP060","T-466","YPB1RDHOOP060S",
            "T-467","GPE91","T-468","GPELDHOOP",
            "T-469","GPEMDHOOP","T-470","GPE92",
            "T-471","GPESWAVE","T-472","GPN103",
            "T-473","GPNWAVE","T-474","GPB3RDHOOP",
            "T-475","PT1R1D","T-476","PTPR3RDHOOP",
            "T-477","PTPR1RDHOOP","T-478","PTPB1RDHOOPS",
            "T-479","PTPB1RDHOOP060S","T-480","PTPB1RDHOOP",
            "T-481","PTPB1RDHOOP060","T-482","RSSPR5R",
            "T-483","SPESHEART","T-484","SPEMHEART",
            "T-485","SPELHEART","T-486","SPB3R",
            "T-487","SPB5R2.7","T-488","SPB5R",
            "T-489","SPB3RDHOOP","T-490","SPE93",
            "T-491","SPELDHOOP","T-492","SPEMDHOOP",
            "T-493","SPE92","T-494","SPN103",
            "T-495","SPESWAVE","T-496","SSPR3R1AQ",
            "T-497","SSPR5R1AQ","T-498","SPNWAVE",
            "T-499","SPR5R",
            "",
        ];
    }
}

function setupEmployees() {
    if (localStorage['employee'] === undefined) {
        localStorage['employee'] = [
            ["Alberto",
            "Anghelo",
            "Cesarina",
            "Douk",
            "Eduer",
            "Enrique",
            "GA",
            "Humberto",
            "James",
            "Joe",
            "Jorge",
            "Kim",
            "Li-e",
            "OR",
            "Pratinny",
            "Raul",
            "Sandoval",
            "Vantha",
            "Viviana",
            "Wayne",
            "William",
            "",]
        ];
    }
}

function setupStages() {
    if (localStorage['stage'] === undefined) {
        localStorage['stage'] =[
            "100 - Sizing",
            "101 - Marking Dots",
            "102 - Tapping",
            "103 - 1st Inspection",
            "104 - Final Inspection",
            "110 - Cut Tube Into Bezel",
            "120 - Re-Size",
            "121 - Clean Heart",
            "122 - Clean ",
            "200 - Heart Rework",
            "201 - Laser / Welding",
            "202 - Bezel / Stone Setting",
            "203 - Set-Up (multiple rings)",
            "204 - Laser 2-Part/Heart",
            "205 - Tac",
            "300 - Solder Post/Heart",
            "301 - Solder 2-Part/Heart",
            "302 - Solder 3-Row Ring",
            "303 - Solder 5-Row Ring",
            "400 - 1st Polish",
            "401 - Final Polish",
            "402 - Heart Rework ",
            "403 - Rework",
            "500 - Engraving",
            "600 - Setting Stones (Vantha)",
            "601 - Clean Bezel",
            "700 - Coiling",
            "701 - Cut Wire",
            "702 - Bending",
            "703 - Oven Hardening",
            "704 - Tumble",
            "705 - Dapping",
            "706 - Cleaning Investment",
            "707 - Cut Casting",
            "708 - Stamping",
            "709 - Make Casting",
            "710 - Flat Stock",
            "800 - Making wax  ",
            "801 - Put Together Tree",
            "900 - Drill Hole for the Heart",
            "901 - Assembly - OR",
            "902 - Swedge wire",
            "903 - Anneal",
            "904 - Pull the Wire",
            "905 - Assembly - Not OR",
            "906 - FIX",
            "907 - Sample",
            "",
        ];
    }
}

function setupMetals() {
    if (localStorage['metal'] === undefined) {
        localStorage['metal'] = [
            '18k Gold',
            'Silver',
            'Platinum',
            '',
        ];
    }    
    for (metal of localStorage['metal'].split(',')) {
        if (localStorage[metal] === undefined && metal !== '') {
            localStorage[metal + '-out'] = '';
            localStorage[metal + '-returned'] = '';
        }
    }    
}

function createKeyForEachEmployee() {
    for (employee of getAllEmployees()) {
        if (localStorage[employee] === undefined && employee !== '') {
            localStorage[employee] = '';
        }
    }
}

// ---- Functions ----

function getAllEmployees() {
    return localStorage['employee'].split(",").slice(0, this.length - 1);
}

function getAllMetals() {
    return localStorage['metal'].split(",").slice(0, this.length - 1);
}

function getAllRingSizes() {
    return localStorage['ring-size'].split(",").slice(0, this.length - 1);
}

function getAllStages() {
    return localStorage['stage'].split(",").slice(0, this.length - 1);
}

function getItemNumber(costCode) {
    let codes = localStorage['cost-code'].split(',');
    let answer = "Code not found"
    if (costCode !== undefined) {
        for (ind in codes) {
            if (codes[ind] === costCode.toString().toUpperCase()) 
                answer = codes[Number(ind) + 1];
        }
    }
    return answer;
}

function createCostCode(code, itemNum) {
    localStorage['cost-code'] = localStorage['cost-code'] + `${code},${itemNum},`;
}

// TRAYS

function getAllTrayNumbers() {
    let output = [];
    let trays = localStorage['tray'].split(',').slice(0, this.length - 1);
    for (ind in trays) {
        if (ind % 2 === 0) {
            output.push(trays[ind]);
        }
    }
    return output.sort();
}

function getTrayWeight(trayNum) {
    let trays = localStorage['tray'].split(',');
    let answer = "Tray not found"
    if (trayNum !== undefined) {
        for (ind in trays) {
            if (trays[ind] === trayNum.toString()) 
                answer = trays[Number(ind) + 1];
        }
    }
    return answer;
}

function createTray(tray, weight) {
    if (!Boolean(Number(weight)) || getAllTrayNumbers().includes(tray)) {
        alert("There was a problem with your request. " +
        "Please enter a correct weight, i.e. a number with 0 or 1 decimal points, " +
        "and make sure the tray you're trying to add doesn't already exist.");
    } else {
        localStorage['tray'] = localStorage['tray'] + `${tray},${weight},`;
    }
}

function deleteTray(trayNum) {
    if (trayNum.toString() === '0') {
        alert("You cannot delete tray 0.");
    } else if(getAllTrayNumbers().includes(trayNum.toString())){
        localStorage['tray'] = localStorage['tray'].replace(`${trayNum},${getTrayWeight(trayNum)},`, '');
    }
}

function updateTray(trayNum, newWeight) {
    if (trayNum.toString() === '0') {
        alert("You cannot change tray 0.");
    } else if(getAllTrayNumbers().includes(trayNum.toString()) && Boolean(Number(newWeight))){
        localStorage['tray'] = localStorage['tray'].replace(`${trayNum},${getTrayWeight(trayNum)},`, `${trayNum},${newWeight},`);
    } else {
        alert("There was a problem processing your request. " +
        "Please double check your input");
    }
}

// WORK TRAYS

class WorkTray {
    constructor(employee, code, tray, description, metal, stage, outWeight, outQty) {
        this.employee = employee,
        this.code = code,
        this.tray = tray,
        this.description = description,
        this.metal = metal,
        this.stage = stage,
        this.outWeight = outWeight,
        this.outQty = outQty,
        this.outTime = (new Date).toString(),
        this.inWeight = undefined,
        this.inQty = undefined,
        this.inTime = undefined
    }
}

// STORAGE INIT

setupCostCodes();
setupEmployees();
setupRingSizes();
setupTrays();
setupStages();
createKeyForEachEmployee();
setupMetals();

// DOM stuff

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function bringUpWorktrayOutForm() {
    const content = document.getElementById('main-content');
    removeChildren(content);
    const form = `<h1>Work Tray Out</h1>
        <div class="form-group">
            <label for="employee">Employee:</label>
            <select class="form-control" id="employee">
                <option selected disabled> -- </option>
            </select>
        </div>
        <div class="form-group">
            <label for="cost-code">Cost Code:</label>
            <input class="form-control" type="text" id="cost-code" autocomplete="off"/>
        </div>
        <div class="form-group">
            <label for="tray">Tray #:</label>
            <input class="form-control" type="text" id="tray" autocomplete="off"/>
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input class="form-control" type="text" id="description" autocomplete="off"/>
        </div>
        <div class="form-group">
            <label for="metal">Metal:</label>
            <select class="form-control" id="metal">
                <option selected disabled> -- </option>
            </select>
        </div>
        <div class="form-group">
            <label for="stage">Stage:</label>
            <select class="form-control" id="stage">
                <option selected disabled> -- </option>
            </select>
        </div>
        <div class="form-group">
            <label for="weight">Weight:</label>
            <input class="form-control" type="text" id="weight" autocomplete="off"/>
        </div>
        <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input class="form-control" type="number" min="0" id="quantity" autocomplete="off"/>
        <div>
        <button class="btn btn-default" onclick="processWorkTrayOut()">Save</button>`

    content.innerHTML += form;
    // Menus
    let employeeMenu = document.getElementById('employee');
    for (employee of getAllEmployees()) {
        employeeMenu.innerHTML += `<option>${employee}</option>`;
    }
    let stageMenu = document.getElementById('stage');
    for (stage of getAllStages()) {
        stageMenu.innerHTML += `<option>${stage}</option>`;
    }
    let metalMenu = document.getElementById('metal');
    for (metal of getAllMetals()) {
        metalMenu.innerHTML += `<option>${metal}</option>`;
    }
}

function bringUpWorktrayInForm() {
    const content = document.getElementById('main-content');
    removeChildren(content);
    const form = `<h1>Work Tray In</h1>
        <div class="form-group">
            <label for="job">Job:</label>
            <select class="form-control" id="job">
                <option selected disabled> -- </option>
            </select>
        </div>
        <div class="form-group">
            <label for="weight">Weight:</label>
            <input class="form-control" type="text" id="weight" autocomplete="off"/>
        </div>
        <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input class="form-control" type="number" min="0" id="quantity" autocomplete="off"/>
        <div>
        <button class="btn btn-default" onclick="processWorkTrayIn()">Save</button>`

    content.innerHTML += form;
    // Menus
}