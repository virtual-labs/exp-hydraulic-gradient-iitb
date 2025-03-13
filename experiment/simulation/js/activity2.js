function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Draw HGL and TEL </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate TEL &amp; HGL", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Draw the TEL and HGL using the following given data</h5>
        <h5>H = ${H}, L<sub>1</sub> = ${l1}, L<sub>2</sub> = ${l2}, d<sub>1</sub> = ${d1}, d<sub>2</sub> = ${d2}, f = ${act2_f} </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity2.png'></div>
        <br>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 = \\frac{\\pi}{4}d_1^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> m<sup>2</sup>
        </p>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_2 = \\frac{\\pi}{4}d_2^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> m<sup>2</sup>
        </p>

        <h5>Using continuity equation</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 v_1 = A_2 v_2 $$
            </span>
        </p>

        <h5>Using Bernoulli's equation between Point 1 and 3</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ H = \\frac{P_2}{\\rho g} + \\frac{v_2^2}{2 g} + h_i + hf_1 + h_e + hf_2\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_i = loss\\ due\\ to\\ entrance $$
                $$ h_i = 0.5 * \\frac{v_1^2}{2g} $$
                $$ h_{f1} =  Friction\\ loss$$
                $$ h_{f1} = \\frac{4 f L_1 v_1^2}{2 g d_1} $$
                $$ h_e = sudden\\ enlargement\\ loss $$
                $$ h_e = \\frac{(v_1 - v_2)^2}{2 g d_2} $$
                $$ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ... eq\\ 2 $$
            </span>
        </p>

        <h5>Using eq 2 and continuing equation into eq 1, find v<sub>2</sub></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_2 = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> m/s
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_1 = \\frac{A_2 v_2}{A_1} $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> m/s
        </p>

        <h5>Total Energy Line</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_1 = \\frac{0.5 v_1^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_2 = \\frac{4fL_1v_1^2}{2gd_1} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_3 = \\frac{(v_1 - v_2)^2}{2gd_2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_4 = \\frac{4fL_2v_1^2}{2gd_2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> m
        </p>

        <h5>Hydraulic Gradient Line</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ BG = \\frac{v_1^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal14-inp'> <span id='cal14-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ CH = \\frac{v_1}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal15-inp'> <span id='cal15-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ DI = \\frac{v_2^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal16-inp'> <span id='cal16-val-sp'></span> m
        </p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ EF = \\frac{v_2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal17-inp'> <span id='cal17-val-sp'></span> m
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify1();'  id='temp-btn-4' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    a1 = (Math.PI / 4) * Math.pow(d1, 2);
    a2 = (Math.PI / 4) * Math.pow(d2, 2);
    r = a2 / a1;
    z = (1 / (2 * g)) + ((0.5 * Math.pow(r, 2)) / (2 * g)) + ((4 * act2_f * l1 * Math.pow(r, 2)) / (2 * g * d1)) + (Math.pow((r - 1), 2) / (2 * g)) + ((4 * act2_f * l2) / (2 * g * d2));
    act2_v2 = Math.sqrt(H / z);
    act2_v1 = (a2 * act2_v2) / a1;
    act2_h1 = (0.5 * Math.pow(act2_v1, 2)) / (2 * g);
    act2_h2 = (4 * act2_f * l1 * (Math.pow(act2_v1, 2))) / (2 * g * (d1));
    act2_h3 = Math.pow((act2_v1 - act2_v2), 2) / (2 * g);
    act2_h4 = (4 * act2_f * l2 * (Math.pow(act2_v2, 2))) / (2 * g * (d2));
    act2_bg = Math.pow(act2_v1, 2) / (2 * g);
    act2_ch = act2_v1 / (2 * g);
    act2_di = Math.pow(act2_v2, 2) / (2 * g);
    act2_ef = act2_v2 / (2 * g);
}
function verify1() {
    let btn = document.getElementById('temp-btn-4');
    console.log("A1 = ", a1);
    console.log("A2 = ", a2);
    console.log("r = ", r);
    console.log("z = ", z);
    console.log("act2 v2 = ", act2_v2);
    console.log("act2 v1 = ", act2_v1);
    console.log("act2 h1 = ", act2_h1);
    console.log("act2 h2 = ", act2_h2);
    console.log("act2 h3 = ", act2_h3);
    console.log("act2 h4 = ", act2_h4);
    console.log("act2 BG = ", act2_bg);
    console.log("act2 CH = ", act2_ch);
    console.log("act2 DI = ", act2_di);
    console.log("act2 EF = ", act2_ef);
    let inp1 = document.getElementById('cal06-inp');
    let sp1 = document.getElementById('cal06-val-sp');
    let inp2 = document.getElementById('cal07-inp');
    let sp2 = document.getElementById('cal07-val-sp');
    let inp3 = document.getElementById('cal08-inp');
    let sp3 = document.getElementById('cal08-val-sp');
    let inp4 = document.getElementById('cal09-inp');
    let sp4 = document.getElementById('cal09-val-sp');
    let inp5 = document.getElementById('cal10-inp');
    let sp5 = document.getElementById('cal10-val-sp');
    let inp6 = document.getElementById('cal11-inp');
    let sp6 = document.getElementById('cal11-val-sp');
    let inp7 = document.getElementById('cal12-inp');
    let sp7 = document.getElementById('cal12-val-sp');
    let inp8 = document.getElementById('cal13-inp');
    let sp8 = document.getElementById('cal13-val-sp');
    let inp9 = document.getElementById('cal14-inp');
    let sp9 = document.getElementById('cal14-val-sp');
    let inp10 = document.getElementById('cal15-inp');
    let sp10 = document.getElementById('cal15-val-sp');
    let inp11 = document.getElementById('cal16-inp');
    let sp11 = document.getElementById('cal16-val-sp');
    let inp12 = document.getElementById('cal17-inp');
    let sp12 = document.getElementById('cal17-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(a1.toFixed(2)))) {
        alert('A1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(a2.toFixed(2)))) {
        alert('A2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(act2_v2.toFixed(2)))) {
        alert('V2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act2_v1.toFixed(2)))) {
        alert('V1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act2_h1.toFixed(2)))) {
        alert('h1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(act2_h2.toFixed(2)))) {
        alert('h2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(2)), parseFloat(act2_h3.toFixed(2)))) {
        alert('h3 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(2)), parseFloat(act2_h4.toFixed(2)))) {
        alert('h4 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(2)), parseFloat(act2_bg.toFixed(2)))) {
        alert('BG is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(2)), parseFloat(act2_ch.toFixed(2)))) {
        alert('CH is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp11.value).toFixed(2)), parseFloat(act2_di.toFixed(2)))) {
        alert('DI is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp12.value).toFixed(2)), parseFloat(act2_ef.toFixed(2)))) {
        alert('EF is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(act2_v2).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(act2_v1).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(act2_h1).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(act2_h2).toFixed(4)}`;
    inp7.remove();
    sp7.innerText = `${(act2_h3).toFixed(4)}`;
    inp8.remove();
    sp8.innerText = `${(act2_h4).toFixed(4)}`;
    inp9.remove();
    sp9.innerText = `${(act2_bg).toFixed(4)}`;
    inp10.remove();
    sp10.innerText = `${(act2_ch).toFixed(4)}`;
    inp11.remove();
    sp11.innerText = `${(act2_di).toFixed(4)}`;
    inp12.remove();
    sp12.innerText = `${(act2_ef).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2.js.map