# Inspera Assessment Hacks

This repository contains a hack to give evaluators keyboard shortcuts for navigating between different candidates and different assignments, and to give points to each assignment.

Reason for hack: too many mouse clicks and too much cursor movement; becomes especially taxing when correcting many exams.

## Install Instructions

1. Open Inspera Assessment in the Chrome browser, and navigate to an assignment to be corrected for some candidate.

2. Open Developer Tools (View menu), change to the Console tab. You can also use the keyboard shortcut ⌥&#8984;I.

3. Copy the javascript text and paste into the Console. The output is expected to be _undefined_.

4. Click in the empty area under the score buttons and private notes area to set focus.

5. Check that you can give a score by clicking one of the number buttons.

## Navigation and Scoring

**Scoring:** press any number button :zero:, :one:, :two:, ... :nine: to give that score. There is currently no way to give scores higher than 9, but it should be possible to map other keys to higher scores if necessary.

**Navigation between Candidates:**

- _z_ - previous candidate
- _x_ - next candidate

**Navigation between Assignments:**

- _n_ - previous assignment
- _m_ - next assignment

## Troubleshooting

If the shortcut keys stop working, try to reactivate it by doing Step 4 again. This can sometimes happen, if there is a long load time, e.g. to load a PDF page or similar. If this becomes a problem, you can try to adjust the timeout values.

## Known limitations

This hack reassign keys for letters to be naviation and score assigning. Hence, if you want to write private notes or other similar things that use the keys that has been reassigned, it will not work as you expeect. If you need this, you can change the key bindings in the script. (Future updates may add a control or option press in addition, unless Inspera fixes this in the next release.)

# Credits

Nicolas Fløysvik (former master student at University of Stavanger); Nicolas implemented the main functionality of this hack.
