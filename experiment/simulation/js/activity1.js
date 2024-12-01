let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Hydraulic Gradient and Total Energy Line</h5>
        <p>Learning Objective: Draw HGL and TEL</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate TEL &amp; HGL", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> Draw the HGL and TEL. Water is flowing through a pipe of diameter ${d}m and length ${l}m, when one end of the pipe is connected to a tank and other end is open to the atmosphere. The height of water level in the tank is ${h}m above the centre of the pipe. Consider all minor losses.</h5>
        <h5>$$ Take\\ f = ${f} $$</h5>
        <h5>$$ Take\\  \\rho = 1000 kg/m^3 $$</h5>
        <h5>$$ hf = \\frac{4fLv^2}{2gd} $$</h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity1.png'></div>
        <br>

        <h5>Using Bernoulli's equation between Point 1 and 2</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{P_1}{\\rho g} + \\frac{v_1^2}{2g} + z_1 = \\frac{P_2}{\\rho g} + \\frac{v_2^2}{2g} + z_2 + h_i + h_f\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        <h5>Loss due to entrance</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ hi = 0.5 * \\frac{v_2^2}{2g}\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 2 $$
            </span>
        </p>

        <h5>Friction Loss</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ hf = \\frac{4fLv^2}{2gd}\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 3 $$
            </span>
        </p>

        <h5>Using eq 2 and eq 3 into eq 1, find the velocity</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_2 = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> m/s
        </p>

        <h5>Total Energy Line</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_1 = \\frac{0.5v_2^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span> m
        </p>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_2 = \\frac{4fLv_2^2}{2gd} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span> m
        </p>

        <h5>Hydraulic Gradient Line</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ EG = \\frac{v_2^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> m
        </p>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ FC = \\frac{v_2^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m
        </p>
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-2' >Verify</button></div>
        
    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    v2 = Math.sqrt(h / ((1.5 / (2 * g)) + (4 * f * l) / (2 * g * (d / 100))));
    h1 = (0.5 * Math.pow(v2, 2)) / (2 * g);
    h2 = (4 * f * l * (Math.pow(v2, 2))) / (2 * g * (d / 100));
    eg = Math.pow(v2, 2) / (2 * g);
    fc = Math.pow(v2, 2) / (2 * g);
}
function verify0() {
    let btn = document.getElementById('temp-btn-2');
    console.log("V2 = ", v2);
    console.log("h1 = ", h1);
    console.log("h2 = ", h2);
    console.log("EG = ", eg);
    console.log("FC = ", fc);
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(v2.toFixed(2)))) {
        alert('V2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(h1.toFixed(2)))) {
        alert('h1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(h2.toFixed(2)))) {
        alert('h2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(eg.toFixed(2)))) {
        alert('EG value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(fc.toFixed(2)))) {
        alert('FC value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(v2).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(h1).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(h2).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(eg).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(fc).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map