import './App.css';

function App() {
  return (
    <div className="App">
		<h1>Headaches</h1>
		<h3>Most headaches go away on their own and are not a sign of something more serious.</h3>
		<h2>How can you ease headaches yourself?</h2>
		<p>Headaches can last between 30 minutes and several hours</p>
		<fieldset class="dodont do">
			<legend>Do</legend>
			<ul>
				<li>drink plenty of water</li>
				<li>get plenty of rest if you have a cold or the flu</li>
				<li>try to relax &mdash; stress can make headaches worse</li>
				<li>take <a href="https://www.nhs.uk/medicines/paracetamol-for-adults-old/">paracetamol</a> or <a href="https://www.nhs.uk/medicines/ibuprofen-for-adults/">ibuprofen</a></li>
				<li>try to stay at home and avoid contact with other people if you have a high temperature or you do not feel well enough to do your normal activities</li>
			</ul>
		</fieldset>
		<br/>
		<fieldset class="dodont dont">
			<legend>Don't</legend>
			<ul>
				<li>do not drink alcohol</li>
				<li>do not skip meals (even if you might not feel like eating anything)</li>
				<li>do not sleep more than you usually would &mdash; it can make the headache worse</li>
				<li>do not strain your eyes for a long time &mdash; for example, by looking at a screen</li>
			</ul>
		</fieldset>
		<br/>
		<fieldset class="standard">
			<legend>See a GP if:</legend>
			<ul>
				<li>your headache keeps coming back</li>
				<li>painkillers do not help and your headache gets worse</li>
				<li>you have a bad throbbing pain at the front or side of your head &mdash; it could be a <a href="https://www.nhs.uk/conditions/migraine/">migraine</a> or, more rarely, a <a href="https://www.nhs.uk/conditions/cluster-headaches/">cluster headache</a></li>
				<li>you feel sick, vomit and find light or noise painful</li>
			</ul>
		</fieldset>
		<br/>
		<fieldset class="advisory">
			<legend>Get an urgent GP appointment or call 111 if:</legend>
			<p>You or your child has a severe headache and:</p>
			<ul>
				<li>jaw pain when eating</li>
				<li>blurred or double vision</li>
				<li>a sore scalp</li>
				<li>other symptoms, such as numbness or weakness in the arms or legs</li>
			</ul>
			<p>Also get an urgent GP appointment or call 111 if your child is under 12 and has any 1 of the following:</p>
			<ul>
				<li>a headache that wakes them at night</li>
				<li>a headache when they wake up in the morning</li>
				<li>a headache that gets progressively worse</li>
				<li>a headache triggered or made worse by coughing, sneezing or bending down</li>
				<li>a headache with vomiting</li>
				<li>a headache with a <a href="https://www.nhs.uk/conditions/squint/">squint</a> (where the eyes point in different directions) or an inability to look upward</li>
			</ul>
			<p>You can call <a href="tel:111">111</a> or <a href="https://111.nhs.uk/?utm_source=nhsuk&utm_campaign=conditions&utm_content=headaches">get help from 111 online</a>.</p>
		</fieldset>
		<br/>
		<fieldset class="critical">
			<legend>Call 999 or go to A&E if you or your child:</legend>
			<ul>
				<li>has a head injury &mdash; for example, from a fall or accident</li>
				<li>has a headache that came on suddenly and is extremely painful</li>
			</ul>
			<p>You or your child has an extremely painful headache and:</p>
			<ul>
				<li>sudden problems speaking or remembering things</li>
				<li>loss of vision</li>
				<li>feel drowsy or confused</li>
				<li>has a very high temperature and <a href="https://www.nhs.uk/conditions/meningitis/symptoms/">symptoms of meningitis</a></li>
				<li>the white part of the eye is red</li>
			</ul>
			<p>Also call 999 or go to A&E if your child is under 12 and has any 1 of the following:</p>
			<ul>
				<li>a headache with vision problems or difficulty speaking, swallowing, balancing or walking</li>
				<li>a headache with drowsiness or a persistent lack of energy</li>
				<li>a headache that starts within 5 days of a head injury</li>
			</ul>
		</fieldset>
		<h2>What can cause headaches</h2>
		<p>The most common reasons are:</p>
		<ul>
			<li>having a <a href="https://www.nhs.uk/conditions/common-cold/">cold</a> or <a href="https://www.nhs.uk/conditions/flu/">flu</a></li>
			<li>stress</li>
			<li>drinking too much alcohol</li>
			<li>bad posture</li>
			<li>eyesight problems</li>
			<li>not eating regular meals</li>
			<li>not drinking enough fluids (dehydration)</li>
			<li>taking too many painkillers</li>
			<li>having your period or during menopause</li>
		</ul>
		<br/>
		<div class="review">
			<p>Page last reviewed: 09 February 2021</p>
			<p>Next review due: 09 February 2024</p>
		</div>
    </div>
  );
}

export default App;
