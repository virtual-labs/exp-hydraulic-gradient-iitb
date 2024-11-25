function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Draw HGL and TEL </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-5' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-5');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate TEL &amp; HGL", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 3</p> <br>
        <h5> Draw the TEL and HGL using the following given data.</h5>
        <h5>H<sub>1</sub> = ${act3_h1}, H<sub>2</sub> = ${act3_h2}, L = ${act3_l}, d = ${act3_d}, f = ${act3_f} </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity3.png'></div>
        <br>

        <h5>Using Bernoulli's equation between Point 1 and 2</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ H_1 = H_2 + h_i + h_f + h_o\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_i = Entrance\\ loss $$
                $$ h_i = \\frac{0.5 v^2}{2 g} $$
                $$ h_f = Friction\\ loss $$
                $$ h_f = \\frac{4 f L v^2}{2 g d} $$
                $$ h_o = Outlet loss $$
                $$ h_o = \\frac{v^2}{2 g} $$
                $$ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ... eq\\ 2 $$
            </span>
        </p>

        <h5>Using eq 2 into eq 1, find v</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal18-inp'> <span id='cal18-val-sp'></span> m/s
        </p>

        <h5>Total Energy Line</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_1 = \\frac{0.5 v^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal19-inp'> <span id='cal19-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_2 = \\frac{4fL_1v^2}{2gd} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal20-inp'> <span id='cal20-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_3 = \\frac{v^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal21-inp'> <span id='cal21-val-sp'></span> m
        </p>

        <h5>Hydraulic Gradient Line</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ BE = \\frac{v^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal22-inp'> <span id='cal22-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ CD = \\frac{v^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal23-inp'> <span id='cal23-val-sp'></span> m
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2();'  id='temp-btn-6' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    act3_a = (Math.PI / 4) * Math.pow(act3_d, 2);
    act3_v = Math.sqrt((act3_h1 - act3_h2) / (((1.5 / (2 * g)) + ((4 * act3_f * act3_l) / (2 * g * act3_d)))));
    act3_h1_cal = (0.5 * Math.pow(act3_v, 2)) / (2 * g);
    act3_h2_cal = (4 * act3_f * act3_l * (Math.pow(act3_v, 2))) / (2 * g * (act3_d));
    act3_h3_cal = Math.pow(act3_v, 2) / (2 * g);
    act3_be = Math.pow(act3_v, 2) / (2 * g);
    act3_cd = Math.pow(act3_v, 2) / (2 * g);
}
function verify2() {
    let btn = document.getElementById('temp-btn-6');
    console.log("act3 a = ", act3_a);
    console.log("act3 v = ", act3_v);
    console.log("act3 H1 cal = ", act3_h1_cal);
    console.log("act3 H2 cal = ", act3_h2_cal);
    console.log("act3 H3 cal = ", act3_h3_cal);
    console.log("act3 BE = ", act3_be);
    console.log("act3 CD = ", act3_cd);
    let inp1 = document.getElementById('cal18-inp');
    let sp1 = document.getElementById('cal18-val-sp');
    let inp2 = document.getElementById('cal19-inp');
    let sp2 = document.getElementById('cal19-val-sp');
    let inp3 = document.getElementById('cal20-inp');
    let sp3 = document.getElementById('cal20-val-sp');
    let inp4 = document.getElementById('cal21-inp');
    let sp4 = document.getElementById('cal21-val-sp');
    let inp5 = document.getElementById('cal22-inp');
    let sp5 = document.getElementById('cal22-val-sp');
    let inp6 = document.getElementById('cal23-inp');
    let sp6 = document.getElementById('cal23-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act3_v.toFixed(2)))) {
        alert('V is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act3_h1_cal.toFixed(2)))) {
        alert('h1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(act3_h2_cal.toFixed(2)))) {
        alert('h2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act3_h3_cal.toFixed(2)))) {
        alert('h3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act3_be.toFixed(2)))) {
        alert('BE is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(act3_cd.toFixed(2)))) {
        alert('CD is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act3_v).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act3_h1_cal).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(act3_h2_cal).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(act3_h3_cal).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(act3_be).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(act3_cd).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('temp-btn-8')
    // );
    // btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity3.js.map